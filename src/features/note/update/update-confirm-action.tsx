import { OutlineButton } from "../../../component/form";
import { cn } from "../../../lib/cn";




interface UpdateConfirmActionProps{
  className?: string;
}


export function UpdateConfirmAction (props: UpdateConfirmActionProps){

  return (
    <div className={cn("flex justify-between", props.className)}>
      <OutlineButton variant="danger" > Batal </OutlineButton>
      <OutlineButton variant="primary" > Update </OutlineButton>
    </div>
  )
}