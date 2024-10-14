import { NoteContainerState } from "./note-container-state";
import ChevronLeft from "../../assets/chevron-left.svg?react"
import { ReactNode, useRef, useState } from "react";
import { cn } from "../../lib/cn";
import { RemoveNoteButton } from "../../features/note/remove";
import { UpdateConfirmAction, UpdateNote, UpdateNoteButton } from "../../features/note/update";

interface NoteContainerProps {
  className?: string;
}


export function NoteContainer(props: NoteContainerProps){

  const [containerState, setContainerState] = useState<NoteContainerState>(NoteContainerState.SHOW);

  const [isCollapse, setIsCollapse] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null);

  
  return <UpdateNote />

  return (
    <div className={cn(props.className, "hover:bg-slate-50 p-2 rounded group")}>
      <UpdateConfirmAction />
      
      {/* <div className="flex justify-between items-center">
        <div className="">
          <div className="text-slate-600 text-sm">
            12 oktober 2024
          </div>
          <div className="text-green-800">
            #jkjksda-asdjkl-qweikasd-qwd
          </div>
        </div>
        <div className="group-hover:flex flex gap-1">
          <div className="flex gap-1">
            <RemoveNoteButton />
            <UpdateNoteButton />
          </div>
          <button className="p-2 rounded active:bg-slate-100" onClick={() => setIsCollapse(!isCollapse)}>
            <ChevronLeft className={cn("w-5 transition", !isCollapse ? "-rotate-90" : "")} />
          </button>
        </div>
      </div> */}

    <div
      ref={contentRef}
      style={
        isCollapse
        ? { maxHeight: 0 }
        : { maxHeight: contentRef.current?.scrollHeight }
      }
      className={cn("overflow-hidden transition-all")}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum, delectus sit sed ea explicabo deserunt, nulla mollitia alias molestiae illum? Molestiae in possimus debitis quidem assumenda, incidunt magni itaque!
    </div>
  </div>
  )

}