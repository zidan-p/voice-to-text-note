import { useEffect, useRef, useState } from "react"





interface AudioVisualizerProps {
  stream: MediaStream
}




export function AudioVisualizer(props: AudioVisualizerProps){

  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(()=>{

    if(!props.stream) return;
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
  
    function draw() {
      const WIDTH = canvasRef?.width!;
      const HEIGHT = canvasRef?.height!;
  
      animationFrameId = requestAnimationFrame(draw);
  
      analyser.getByteTimeDomainData(dataArray);
  
      canvasCtx.fillStyle = "rgb(200, 200, 200)";
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  
      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = "rgb(0, 0, 0)";
  
      canvasCtx.beginPath();
  
      let sliceWidth = (WIDTH * 1.0) / bufferLength;
      let x = 0;
  
      for (let i = 0; i < bufferLength; i++) {
        console.log(dataArray[i] / 128.0)
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
    <canvas ref={setCanvasRef} className="w-full" />
  )
}



export function AudioVisualizerDummy() {
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();

  useEffect(() => {
    // On the first render, canvas won't be set. However, once setCanvas is called by ref, this effect will run again.
    if (canvas == null) return;
    const ctx = canvas.getContext("2d");
    if(!ctx) return;
    const dashLen = 220;
    let dashOffset = dashLen;
    const speed = 5;
    const txt = "STROKE-ON CANVAS";
    let x = 30;
    let i = 0;

    ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.globalAlpha = 2 / 3;
    ctx.strokeStyle = ctx.fillStyle = "#1f2f90";
    
    // Keep track of wether the component is still mounted
    let mounted = true;

    const loop = () => {
      if (!mounted) return;
      ctx.clearRect(x, 0, 60, 150);
      ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
      dashOffset -= speed; // reduce dash length
      ctx.strokeText(txt[i], x, 90); // stroke letter

      if (dashOffset > 0) requestAnimationFrame(loop); // animate
      else {
        ctx.fillText(txt[i], x, 90); // fill final letter
        dashOffset = dashLen; // prep next char
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
        ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random()); // random y-delta
        ctx.rotate(Math.random() * 0.005); // random rotation
        if (i < txt.length) requestAnimationFrame(loop);
      }
    };

    requestAnimationFrame(loop);
    
    // React will call this function when the effects' dependencies change, or the component is unmounted
    return () => {
      // Set mounted to false so that the next frame is short-circuited.
      mounted = false;
    };
  }, [canvas]);

  // @ts-ignore
  return <canvas width="630" ref={setCanvas}></canvas>;
}