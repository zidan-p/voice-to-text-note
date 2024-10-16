import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import PlayIcon from "./../../assets/play.svg?react";
import StopIcon from "./../../assets/stop.svg?react"
import { AudioRecordingState } from "./audio-recording-state";
import { AudioVisualizer } from "./audio-visualizer";


interface AudioRecordingWithRefProps {
  onStartRecording?: () => void;
  onStopRecording?: () => void;
  onResult?: (audioUrl : string) => void;
}


export interface AudioRecordingWithRefMethod {
  startRecording: () => void;
  stopRecording: () => void;
}

export const  AudioRecordingWithRef = forwardRef((
  porps: AudioRecordingWithRefProps, 
  ref: ForwardedRef<AudioRecordingWithRefMethod>
) => {

  const [_recordedUrl, setRecordedUrl] = useState('');
  const mediaStream = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  // const stream = useRef(null);

  const [recordingState, setRecordingState] = useState(AudioRecordingState.IDLE)


  useEffect(()=>{
    console.log(mediaStream);
  },[mediaStream.current])  

  useImperativeHandle(ref, () =>({
    startRecording: startRecording,
    stopRecording: stopRecording
  }))

  async function startRecording() {

    if(recordingState === AudioRecordingState.RECORDING) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia(
        { audio: true }
      );
      mediaStream.current = stream;
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      };
      mediaRecorder.current.onstop = () => {
        const recordedBlob = new Blob(
          chunks.current, { type: 'audio/webm' }
        );
        const url = URL.createObjectURL(recordedBlob);
        setRecordedUrl(url);
        chunks.current = [];

        if(porps.onResult) porps.onResult(url);
      };
      mediaRecorder.current.start();

      if(porps.onStartRecording) porps.onStartRecording();

      // because i place my media stream as ref, it wont rerender when the new one in replace it.
      // because of that, i rely on this state change to update the child component 
      setRecordingState(AudioRecordingState.RECORDING);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  function stopRecording(){

    if(recordingState === AudioRecordingState.IDLE) return;

    setRecordingState(AudioRecordingState.IDLE);

    if(mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
    }
    if(mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => {
        track.stop();
      });
    }

    if(porps.onStopRecording) porps.onStopRecording();
  };
  return (
    <div className="flex items-center gap-2">

      {/* use audio player here for preview */}
      {/* <AudioRecordingPlayer recordedUrl={_recordedUrl} /> */}

      {recordingState === AudioRecordingState.IDLE && (
        <button onClick={startRecording} 
          className="bg-green-200 p-2 rounded-full text-green-700 active:bg-green-300">
          <PlayIcon className="w-5" />
        </button>
      )}

      {recordingState === AudioRecordingState.RECORDING && (
        <button onClick={ stopRecording} 
          className="bg-red-200 p-2 rounded-full text-red-700 active:bg-red-300">
          <StopIcon className="w-5" />
        </button>
      )}

      <AudioVisualizer stream={mediaStream.current!} />
    </div>
  );
})