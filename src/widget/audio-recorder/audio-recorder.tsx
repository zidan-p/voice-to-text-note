import { useRef, useState } from "react";
import PlayIcon from "../../assets/play.svg?react";
import StopIcon from "../../assets/stop.svg?react"




// from this source https://www.cybrosys.com/blog/how-to-implement-audio-recording-in-a-react-application


export function AudioRecorder(){

  const [recordedUrl, setRecordedUrl] = useState('');
  const mediaStream = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const startRecording = async () => {
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
      };
      mediaRecorder.current.start();
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };
  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
    }
    if (mediaStream.current) {
      mediaStream.current.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };
  return (
    <div>
      <audio controls src={recordedUrl} />
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
    </div>
  );


  return  (
    <div className="flex gap-1">
      <button className="bg-red-200 p-2 rounded-full text-red-700 active:bg-red-300">
        <StopIcon className="w-5" />
      </button>
      <button className="bg-green-200 p-2 rounded-full text-green-700 active:bg-green-300">
        <PlayIcon className="w-5" />
      </button>
    </div>
  )
}