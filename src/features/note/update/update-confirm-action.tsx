import { OutlineButton } from "../../../component/form";
import { cn } from "../../../lib/cn";




interface UpdateConfirmActionProps{
  className?: string;
  onConFirmUpdate: () => any;
  onConFirmCancel: () => any;
}


export function UpdateConfirmAction (props: UpdateConfirmActionProps){

  return (
    <div className={cn("flex justify-between", props.className)}>
      <OutlineButton variant="danger" onClick={props.onConFirmCancel} > Batal </OutlineButton>
      <OutlineButton variant="primary" onClick={props.onConFirmUpdate} > Update </OutlineButton>
    </div>
  )
}