import { ReactNode, useRef, useState } from "react";
import { cn } from "../../../lib/cn";
import ChevronLeft from "../../../assets/chevron-left.svg?react";


interface NoteListProps {
  className?: string;
  buttonList?: ReactNode;
}



export function NoteList(props: NoteListProps){
  
  const [isCollapse, setIsCollapse] = useState(true);
  const contentRef = useRef<HTMLParagraphElement | null>(null);

  return(
    <div className={cn(props.className, "group")}>
      <div className="flex justify-between items-center">
        <div className="">
          <div className="text-slate-600 text-sm">
            12 oktober 2024
          </div>
          <div className="text-green-800">
            #jkjksda-asdjkl-qweikasd-qwd
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum, delectus sit sed ea explicabo deserunt, nulla mollitia alias molestiae illum? Molestiae in possimus debitis quidem assumenda, incidunt magni itaque!
      </p>
    </div>
  )
}