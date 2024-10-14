import TrashIcon from "./../../../assets/trash.svg?react";



interface RemoveNoteButtonProps {
  onClick?: () => any
}

export function RemoveNoteButton (props: RemoveNoteButtonProps){

  function handleOnClick(){
    if(props.onClick) props.onClick();
  }

  return (
    <button onClick={handleOnClick} className="p-2 bg-red-300 rounded text-red-800 active:text-red-700 active:bg-red-200">
      <TrashIcon className="w-5" />
    </button>
  )
}