import TrashIcon from "./../../../assets/trash.svg?react";





export function RemoveNoteButton (){


  return (
    <button className="p-2 bg-red-300 rounded text-red-800 active:text-red-700 active:bg-red-200">
      <TrashIcon className="w-5" />
    </button>
  )
}