import { useState } from "react";
import { UpdateConfirmAction } from "./update-confirm-action";
import { UpdateNoteTextArea } from "./update-note-text-area";



interface UpdateNoteProps {
  // value: string;
  id: string;
  onUpdate?: (newVal: string) => any;
  onCancel?: () => void;
}



export function UpdateNote(props: UpdateNoteProps){

  const [changeContainer, setChangeContainer] = useState("");

  // consume service here...
  function handleOnUpdate(){
    
    if(props.onUpdate) props.onUpdate(changeContainer);
  }

  function handleOnChage(val: string){
    setChangeContainer(val)
  }

  function handleOnCancel(){
    if(props.onCancel) props.onCancel();
  }

  

  return (
    <div className="">
      <UpdateConfirmAction 
        onConFirmCancel={handleOnCancel}
        onConFirmUpdate={handleOnUpdate}
        className="mb-2"  
      />
      <UpdateNoteTextArea  
        onChange={handleOnChage}
        value={changeContainer}
      />
    </div>
  )
}