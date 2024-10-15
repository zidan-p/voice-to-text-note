import { useState } from "react";
import { AddConfirmAction } from "./add-confirm-action";
import { AddNoteTextArea } from "./add-note-text-area";



interface AddNoteProps {
  onAdd?: (newVal: string) => any;
  onCancel?: () => void;
}



export function AddNote(props: AddNoteProps){
  const [changeContainer, setChangeContainer] = useState("");

  // consume service here...
  function handleOnUpdate(){
    
    if(props.onAdd) props.onAdd(changeContainer);
  }

  function handleOnChage(val: string){
    setChangeContainer(val)
  }

  function handleOnCancel(){
    if(props.onCancel) props.onCancel();
  }

  

  return (
    <div className="">
      <AddConfirmAction 
        onConFirmCancel={handleOnCancel}
        onConFirmAdd={handleOnUpdate}
        className="mb-2"  
      />
      <AddNoteTextArea  
        onChange={handleOnChage}
        value={changeContainer}
      />
    </div>
  )
}