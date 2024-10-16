import { useEffect, useState } from "react";
import { Note } from "../../entity/note";
import { appNoteService } from "../../service";
import { NoteContainer } from "./note-container";







export function NoteContainerListener(){

  const [noteData, setNoteData] = useState<Note[]>([]);
  

  useEffect(() => {
    getAllNote();
    registerNoteUpdate();
  },[])


  async function getAllNote(){
    const results = await appNoteService.getAllNote();
    setNoteData(results);
  }

  function handleOnUpdate(data: Note[]){
    setNoteData(data);
  }

  function registerNoteUpdate(){
    appNoteService.listenDbUpdate(handleOnUpdate)  
  }


  return(
    <>
    {noteData.map(note => (<NoteContainer key={note.id}  {...note}/>))}
    </>
  )

}