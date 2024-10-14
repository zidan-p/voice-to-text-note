import { cn } from "../lib/cn";
import TrashIcon from "./../assets/trash.svg?react";
import PencilIcon from "../assets/pencil.svg?react";
import ChevronLeft from "../assets/chevron-left.svg?react"

interface CollapseListProps {
  className?: string;
}


export function CollapseList(props: CollapseListProps){

  return(
    <div className={cn(props.className, "hover:bg-slate-200 p-2 rounded group")}>
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
          <button className="p-2 bg-amber-300 rounded text-amber-800 active:text-amber-700 active:bg-amber-200">
            <PencilIcon className="w-5" />
          </button>
          <button className="p-2 bg-red-300 rounded text-red-800 active:text-red-700 active:bg-red-200">
            <TrashIcon className="w-5" />
          </button>
          <button className="p-2 rounded active:bg-slate-100">
            <ChevronLeft className="w-5" />
          </button>
        </div>
      </div>
      <p className="hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum, delectus sit sed ea explicabo deserunt, nulla mollitia alias molestiae illum? Molestiae in possimus debitis quidem assumenda, incidunt magni itaque!
      </p>
    </div>
  )
}