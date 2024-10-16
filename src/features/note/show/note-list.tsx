import { ReactNode, useRef, useState } from "react";
import { cn } from "../../../lib/cn";
import ChevronLeft from "../../../assets/chevron-left.svg?react";


interface NoteListProps {
  className?: string;
  buttonList?: ReactNode;
  id: string;
  date: Date;
  content: string
}



export function NoteList(props: NoteListProps){
  
  const [isCollapse, setIsCollapse] = useState(true);
  const contentRef = useRef<HTMLParagraphElement | null>(null);

  return(
    <div className={cn(props.className, "group")}>
      <div className="flex justify-between items-center">
        <div className="">
          <div className="text-slate-600 text-sm">
            {props.date.toLocaleDateString()}
          </div>
          <div className="text-green-800">
            # {props.id}
          </div>
        </div>
        <div className="group-hover:flex hidden gap-1">
          <div className="flex gap-1">{props.buttonList}</div>
          <button className="p-2 rounded active:bg-slate-100" onClick={() => setIsCollapse(!isCollapse)}>
            <ChevronLeft className={cn("w-5 transition", !isCollapse ? "-rotate-90" : "")} />
          </button>
        </div>
      </div>
      <p
        ref={contentRef}
        style={
          isCollapse
          ? { maxHeight: 0 }
          : { maxHeight: contentRef.current?.scrollHeight }
        }
        className={cn("overflow-hidden transition-all")}
      >
        {props.content}
      </p>
    </div>
  )
}