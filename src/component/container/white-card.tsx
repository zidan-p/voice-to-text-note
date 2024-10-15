import { ReactNode } from "react"


interface WhiteCardProps {
  children: ReactNode
}

export  function WhiteCard(props: WhiteCardProps){

  return (
    <div className="max-w-lg mx-auto p-1 bg-white rounded">
      {props.children}
    </div>
  )
}