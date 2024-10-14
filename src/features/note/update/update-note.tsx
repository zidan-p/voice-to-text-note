import { useState } from "react";
import { UpdateConfirmAction } from "./update-confirm-action";
import { UpdateNoteTextArea } from "./update-note-text-area";



interface UpdateNoteProps {
  // value: string;
  // id: string;
  // onUpdate: (newVal: string) => any;
}



export function UpdateNote(props: UpdateNoteProps){

  const [changeContainer, setChangeContainer] = useState("");

  // consume service here...
  function handleOnUpdate(val: string){
    
  }

  function handleOnChage(val: string){
    setChangeContainer(val)
  }

  return (
    <div className="">
      <UpdateConfirmAction className="mb-2" />
      <UpdateNoteTextArea  
        onChange={handleOnChage}
        value={changeContainer}
      />
    </div>
  )
}