import PencilIcon from "../../../assets/pencil.svg?react";


interface UpdateNoteButtonProps {
  onClick?: () => any
}


export function UpdateNoteButton(props: UpdateNoteButtonProps){

  return (
    <button 
      onClick={props.onClick ?  props.onClick : () => {}} 
      className="p-2 bg-amber-300 rounded text-amber-800 active:text-amber-700 active:bg-amber-200"
    >
      <PencilIcon className="w-5" />
    </button>
  )
}