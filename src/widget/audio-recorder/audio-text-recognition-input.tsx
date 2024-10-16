import { useRef } from "react";
import { AudioRecordingWithRef, AudioRecordingWithRefMethod } from "../../features/audio-recording";
import { AudioToTextMethod, AudioToTextWithRef } from "../../features/audio-to-text";




// from this source https://www.cybrosys.com/blog/how-to-implement-audio-recording-in-a-react-application


export function AudioTextRecognitionInput(){

  const audioToTextRef = useRef<AudioToTextMethod | null>(null);
  const audioRecordingRef = useRef<AudioRecordingWithRefMethod | null>(null);

  function handleOnStartRecording(){
    if(!audioToTextRef.current) return ;

    audioToTextRef.current.startRecognition();
  }

  function handleOnStopRecording(){}

  function handleOnStartRecognotion(){}

  function handleOnStopRecognotion(){
    audioRecordingRef.current?.stopRecording();
  }

  function handleAcceptedTranscript(transcript: string){
  }

  function handleDeclineTranscript(transcript: string){
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