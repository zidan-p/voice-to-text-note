import { NoteContainerState } from "./note-container-state";
import ChevronLeft from "../../assets/chevron-left.svg?react"
import { ReactNode, useRef, useState } from "react";
import { cn } from "../../lib/cn";
import { RemoveConfirm, RemoveNoteButton } from "../../features/note/remove";
import { UpdateConfirmAction, UpdateNote, UpdateNoteButton } from "../../features/note/update";
import { NoteList } from "../../features/note/show";

interface NoteContainerProps {
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
        id="nganunganu"
        onRemove={ChangeContainerState(NoteContainerState.SHOW)}
        onCancel={ChangeContainerState(NoteContainerState.SHOW)}
      />
    </div>

  )
  
  if(containerState === NoteContainerState.EDIT) return( 
    <div className={cn(props.className, "hover:bg-slate-50 p-2 rounded group")}>
      <UpdateNote 
        id="nganunganu"
        onUpdate={ChangeContainerState(NoteContainerState.SHOW)}  
        onCancel={ChangeContainerState(NoteContainerState.SHOW)}  
      />
    </div>
  )

  return (
    <div className={cn(props.className, "hover:bg-slate-50 p-2 rounded group")}>
      <NoteList 
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