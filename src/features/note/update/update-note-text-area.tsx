

interface UpdateNoteTextAreaProps {
  value: string;
  onChange: (val: string) => any;
}



export function UpdateNoteTextArea(props: UpdateNoteTextAreaProps){

  return (
    <textarea 
      className="w-full text-black p-1"
      value={props.value} 
      onChange={(e) => props.onChange(e.target.value)}
    ></textarea>
  )
}