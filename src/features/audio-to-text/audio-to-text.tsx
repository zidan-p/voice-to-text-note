import { useEffect, useRef, useState } from "react"
import PlayIcon from "./../../assets/play.svg?react";
import StopIcon from "./../../assets/stop.svg?react"
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
}

/**
 * ## WARNING ##
 * this speech to text only can be used in chrome
 * @see [browser compability](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#browser_compatibility)
 * @param props 
 * @returns 
 */
export function AudioToText(props: AudioToTextProps){

  const speechRecognition = useRef<SpeechRecognition | null>(null);
  const [speechResult, setSpeechResult] = useState("");

  const [regocnitionState, setRecognotionState] = useState(AudioToTextState.IDLE)
  const [actionState, setActionState] = useState(AudioInitialState.INITIAL);

  useEffect(()=>{
    initSpeechRecognition();
  },[]);


  async function initSpeechRecognition(){
    speechRecognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    speechRecognition.current.interimResults = true;
    speechRecognition.current.lang = "en-US";


    speechRecognition.current.onstart = () => {
      setRecognotionState(AudioToTextState.RECOGNIZING);
      setActionState(AudioInitialState.RESULT)
      setSpeechResult("....")
    };
    
    speechRecognition.current.onresult = (event) => {
      console.log(event.results);
      const transcript = event.results[0][0].transcript;
      setSpeechResult(transcript)
    };
    
    speechRecognition.current.onend = () => {
      setRecognotionState(AudioToTextState.IDLE);
    };

  }


  function startRecognition(){
    if(!speechRecognition.current) return;
    speechRecognition.current.start();
  }

  function stopRecognition(){
    if(!speechRecognition.current) return;
    speechRecognition.current.stop();
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

      <div className="flex justify-between items-center">
        {regocnitionState === AudioToTextState.IDLE && (
          <button onClick={startRecognition} className="bg-green-200 p-2 rounded-full text-green-700 active:bg-green-300">
            <PlayIcon className="w-5" />
          </button>
        )}

        {regocnitionState === AudioToTextState.RECOGNIZING && (
          <button onClick={ stopRecognition} className="bg-red-200 p-2 rounded-full text-red-700 active:bg-red-300">
            <StopIcon className="w-5" />
          </button>
        )}

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
}