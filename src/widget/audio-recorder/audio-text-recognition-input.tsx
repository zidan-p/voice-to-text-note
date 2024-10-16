import { useRef, useState } from "react";
import { AudioRecordingWithRef, AudioRecordingWithRefMethod } from "../../component/audio/audio-recording";
import { AudioToTextMethod, AudioToTextWithRef } from "../../component/audio/audio-to-text";




// from this source https://www.cybrosys.com/blog/how-to-implement-audio-recording-in-a-react-application

const AudioState = {
  IDLE: "idle",
  CAPTURE: "capture",
  RESULT: "result"
} as const;

type AudioStateValue = typeof AudioState[keyof typeof AudioState];


interface AudioTextRecognitionInputProps {
  onAcceptText?: (text: string) => any;
  onDeclineText?: (text: string) => any;
}

export function AudioTextRecognitionInput(props: AudioTextRecognitionInputProps){

  const [audioToTextState, setAudioTextState] = useState<AudioStateValue>(AudioState.IDLE);
  const audioToTextRef = useRef<AudioToTextMethod | null>(null);
  const audioRecordingRef = useRef<AudioRecordingWithRefMethod | null>(null);

  function handleOnStartRecording(){
    if(!audioToTextRef.current) return ;

    audioToTextRef.current.startRecognition();
    setAudioTextState(AudioState.CAPTURE);
  }

  function handleOnStopRecording(){}

  function handleOnStartRecognotion(){}

  function handleOnStopRecognotion(){
    audioRecordingRef.current?.stopRecording();
    setAudioTextState(AudioState.RESULT);
  }

  function handleAcceptedTranscript(transcript: string){
    setAudioTextState(AudioState.IDLE);
    if(props.onAcceptText) props.onAcceptText(transcript);
  }
  
  function handleDeclineTranscript(transcript: string){
    setAudioTextState(AudioState.IDLE);
    if(props.onDeclineText) props.onDeclineText(transcript);
  }


  return (
    <>
      <AudioRecordingWithRef
        ref={audioRecordingRef}
        onStartRecording={handleOnStartRecording}

      />
      <AudioToTextWithRef 
        ref={audioToTextRef} 
        onAcceptText={handleAcceptedTranscript}
        onDeclineText={handleDeclineTranscript}
        onStopRecognition={handleOnStopRecognotion}
      />
    </>
  )
}