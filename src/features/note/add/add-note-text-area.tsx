

interface AddNoteTextAreaProps {
  value: string;
  onChange: (val: string) => any;
}



export function AddNoteTextArea(props: AddNoteTextAreaProps){

  return (
    <textarea 
    className="w-full text-black p-1"
    value={props.value} 
    onChange={(e) => props.onChange(e.target.value)}
  ></textarea>
  )
}