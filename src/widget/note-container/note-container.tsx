import { NoteContainerState } from "./note-container-state";
import {  useState } from "react";
import { cn } from "../../lib/cn";
import { RemoveConfirm, RemoveNoteButton } from "../../features/note/remove";
import { UpdateNote, UpdateNoteButton } from "../../features/note/update";
import { NoteList } from "../../features/note/show";

interface NoteContainerProps {
  id: string;
  date: Date;
  content: string;
  className?: string;
}


export function NoteContainer(props: NoteContainerProps){

  const [containerState, setContainerState] = useState<NoteContainerState>(NoteContainerState.SHOW);

  function ChangeContainerState(state: NoteContainerState){
    return () => setContainerState(state);
  }

  if(containerState === NoteContainerState.DELETE) return (
    <div className={cn(props.className, "hover:bg-slate-50 p-2 rounded group")}>
      <RemoveConfirm 
        id={props.id}
        onRemove={ChangeContainerState(NoteContainerState.SHOW)}
        onCancel={ChangeContainerState(NoteContainerState.SHOW)}
      />
    </div>

  )
  
  if(containerState === NoteContainerState.EDIT) return( 
    <div className={cn(props.className, "hover:bg-slate-50 p-2 rounded group")}>
      <UpdateNote 
        id={props.id}
        value={props.content}
        onUpdate={ChangeContainerState(NoteContainerState.SHOW)}  
        onCancel={ChangeContainerState(NoteContainerState.SHOW)}  
      />
    </div>
  )

  return (
    <div className={cn(props.className, "hover:bg-slate-50 p-2 rounded group")}>
      <NoteList 
        id={props.id}
        content={props.content}
        date={props.date}
        buttonList={
          <>
          <RemoveNoteButton onClick={ChangeContainerState(NoteContainerState.DELETE)} />
          <UpdateNoteButton onClick={ChangeContainerState(NoteContainerState.EDIT)}  />
          </>
        }
      />
    </div>
  )


}