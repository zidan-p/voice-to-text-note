import { ReactNode } from "react"



interface BodyContainerProps {
  children: ReactNode;
}


export function BodyContainer(props: BodyContainerProps){


  return (
    <div className="container mx-auto min-h-screen bg-slate-100 py-4">
      {props.children}
    </div>
  )
}