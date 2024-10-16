import { useState } from "react";
import { AddConfirmAction } from "./add-confirm-action";
import { AddNoteTextArea } from "./add-note-text-area";
import { appNoteService } from "../../../service";



interface AddNoteProps {
  onAdd?: (newVal: string) => any;
  onCancel?: () => void;
}



export function AddNote(props: AddNoteProps){
  const [changeContainer, setChangeContainer] = useState("");

  // consume service here...
  async function handleOnAdd(){
    
    if(props.onAdd) props.onAdd(changeContainer);

    await appNoteService.createNote({content: changeContainer});

    console.log("successfully create database")
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
        onConFirmAdd={handleOnAdd}
        className="mb-2"  
      />
      <AddNoteTextArea  
        onChange={handleOnChage}
        value={changeContainer}
      />
    </div>
  )
}