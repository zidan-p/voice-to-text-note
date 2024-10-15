


interface AudioRecordingPlayerProps {
  recordedUrl: string
}


// used for preview result
export function AudioRecordingPlayer(props: AudioRecordingPlayerProps){

  return(
    <audio controls src={props.recordedUrl} />
  )
}