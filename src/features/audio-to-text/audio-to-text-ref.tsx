import { useEffect, useRef, useState } from "react"
import PlayIcon from "./../../assets/play.svg?react";
import StopIcon from "./../../assets/stop.svg?react"


enum  AudioToTextState {
  RECOGNIZING = "recognozning",
  IDLE = "idle"
}


export function AudioToText(){

  const speechRecognition = useRef<SpeechRecognition | null>(null);
  const [speechResult, setSpeechResult] = useState("");

  const [regocnitionState, setRecognotionState] = useState(AudioToTextState.IDLE)

  useEffect(()=>{
    initSpeechRecognition();
  },[]);


  async function initSpeechRecognition(){
    speechRecognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    speechRecognition.current.interimResults = true;
    speechRecognition.current.lang = "en-US";


    speechRecognition.current.onstart = () => {
      setRecognotionState(AudioToTextState.RECOGNIZING);
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

  return (
    <div className="">
      <p>{speechResult}</p>

      <div className="">{regocnitionState}</div>

      <div className="flex">
        <button onClick={startRecognition} className="bg-green-200 p-2 rounded-full text-green-700 active:bg-green-300">
          <PlayIcon className="w-5" />
        </button>

        <button onClick={ stopRecognition} className="bg-red-200 p-2 rounded-full text-red-700 active:bg-red-300">
          <StopIcon className="w-5" />
        </button>
      </div>

    </div>
  )
}