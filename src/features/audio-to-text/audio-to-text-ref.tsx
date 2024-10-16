import { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
import XIcon from "./../../assets/x.svg?react";
import CheckIcon from "./../../assets/check.svg?react";

enum  AudioToTextState {
  RECOGNIZING = "recognozning",
  IDLE = "idle"
}

enum AudioInitialState {
  INITIAL = "initial",
  RESULT = "result"
}


interface AudioToTextProps {
  onAcceptText?: (text: string) => void;
  onDeclineText?: (declinedText: string) => void;
  onStartRecognition?: () => void;
  onStopRecognition?: () => void;
}

interface AudioToTextMethod {
  startRecognition : () => void;
  stopRecognition : () => void;
}

/**
 * ## NOTE ##
 * this speech to text can only be used in chrome
 * @see [browser compability](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#browser_compatibility)
 */
export const  AudioToTextWithRef = forwardRef((props: AudioToTextProps, ref: ForwardedRef<AudioToTextMethod>) => {

  const speechRecognition = useRef<SpeechRecognition | null>(null);
  const [speechResult, setSpeechResult] = useState("");

  const [_regocnitionState, setRecognotionState] = useState(AudioToTextState.IDLE)
  const [actionState, setActionState] = useState(AudioInitialState.INITIAL);

  useEffect(()=>{
    initSpeechRecognition();
  },[]);

  useImperativeHandle(ref, () => ({
    startRecognition(){
      if(!speechRecognition.current) return;
      speechRecognition.current.start();
    },
    stopRecognition(){
      if(!speechRecognition.current) return;
      speechRecognition.current.stop();
    }
  }))


  async function initSpeechRecognition(){
    speechRecognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    speechRecognition.current.interimResults = true;
    speechRecognition.current.lang = "en-US";


    speechRecognition.current.onstart = () => {
      setRecognotionState(AudioToTextState.RECOGNIZING);
      setActionState(AudioInitialState.RESULT)
      setSpeechResult("....")
      if(props.onStartRecognition) props.onStartRecognition();
    };
    
    speechRecognition.current.onresult = (event) => {
      console.log(event.results);
      const transcript = event.results[0][0].transcript;
      setSpeechResult(transcript)
    };
    
    speechRecognition.current.onend = () => {
      setRecognotionState(AudioToTextState.IDLE);
      if(props.onStopRecognition) props.onStopRecognition();
    };

  }


  function acceptText(){
    if(props.onAcceptText) props.onAcceptText(speechResult);
    setActionState(AudioInitialState.INITIAL)
    setSpeechResult("")
  }


  function declineText(){
    if(props.onDeclineText) props.onDeclineText(speechResult);
    setActionState(AudioInitialState.INITIAL)
    setSpeechResult("")
  }

  return (
    <div className="border p-1 rounded">
      {actionState === AudioInitialState.RESULT && (
        <p className="mb-2">{speechResult}</p>
      )}

      {actionState === AudioInitialState.INITIAL && (
        <p className="text-primary-light">Speech to text here ...</p>
      )}

      {/* <div className="">{regocnitionState}</div> */}

      <div className="flex flex-row-reverse items-center">

        {actionState == AudioInitialState.RESULT && (
        <div className="flex gap-2 px-2">
          <button onClick={declineText} className="text-danger hover:text-danger/40">
            <XIcon className="w-5" />
          </button>
          <button onClick={acceptText} className="text-primary-dark hover:text-primary-dark/40">
            <CheckIcon className="w-5" />
          </button>
        </div>
        )}
      </div>
    </div>
  )
})