import { useState } from "react";
import { AddNoteButton } from "./add-note-button";
import { AddNote } from "./add-note";





export function AddNoteInline(){

  const [isAction, setIsAction] = useState(false);


  if(!isAction) return (
    <AddNoteButton onClick={() => setIsAction(true)} />
  )

  return (
    <AddNote onAdd={() => setIsAction(false)} onCancel={() => setIsAction(false)}/>
  )

  
}