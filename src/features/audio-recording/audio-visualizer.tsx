import { useEffect, useRef, useState } from "react"





interface AudioVisualizerProps {
  stream: MediaStream
}



/**
 * 
 * @param props 
 * @returns 
 * @see - https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone
 * @see - https://stackoverflow.com/questions/73832209/adapting-an-animated-canvas-element-into-a-react-component
 */
export function AudioVisualizer(props: AudioVisualizerProps){

  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(()=>{

    console.log("changing effect")

    if(!props.stream) {
      drawStraightLine();
      return;
    }
    if(!canvasRef) return;
    if (!canvasCtxRef.current) canvasCtxRef.current = canvasRef!.getContext("2d")!;
    if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();



    
    
    let animationFrameId: number;

    const audioCtx = audioCtxRef.current!;
    const canvasCtx = canvasCtxRef.current!;
    
  
    const source = audioCtx.createMediaStreamSource(props.stream);
  
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
  
    source.connect(analyser);

    function drawStraightLine(){
      if(!canvasRef) return;
      const canvasCtx = canvasRef!.getContext("2d");

      if(!canvasCtx) return;

      console.log("menggambar garis lurus")

      const WIDTH = canvasRef?.width!;
      const HEIGHT = canvasRef?.height!;

      canvasCtx.fillStyle = "#fff";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(0, 0, 0)";

      canvasCtx.beginPath();
      canvasCtx.moveTo(0, HEIGHT / 2);
      canvasCtx.lineTo(WIDTH, HEIGHT / 2);
      canvasCtx.stroke();

    }
  
    function draw() {
      const WIDTH = canvasRef?.width!;
      const HEIGHT = canvasRef?.height!;
  
      animationFrameId = requestAnimationFrame(draw);
  
      analyser.getByteTimeDomainData(dataArray);
  
      canvasCtx.fillStyle = "#fff";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(0, 0, 0)";
  
      canvasCtx.beginPath();
  
      let sliceWidth = (WIDTH * 1.0) / bufferLength;
      let x = 0;
  
      for (let i = 0; i < bufferLength; i++) {
        let v = dataArray[i] / 128.0;
        let y = (v * HEIGHT) / 2;
  
        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }
  
        x += sliceWidth;
      }
  
      canvasCtx.lineTo(WIDTH, HEIGHT / 2);
      canvasCtx.stroke();
    }

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }

  },[props.stream, canvasRef])

  return (
    <canvas ref={setCanvasRef} className="w-full h-16" />
  )
}