import PlusIcon from "./../../../assets/plus.svg?react";


interface AddNoteButtonProps{
  onClick?: () => any;
  className?: string
}


export function AddNoteButton(props: AddNoteButtonProps){

  function handleOnClick(){
    if(props.onClick) props.onClick();

  }

  return (
  <button 
    onClick={handleOnClick} 
    className="p-2 flex items-center gap-1  bg-primary rounded text-white active:text-primary-light active:bg-primary/40"
  >
    <PlusIcon className="w-6" />
    Create
  </button>
  )
}