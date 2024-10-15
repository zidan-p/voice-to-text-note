import { OutlineButton } from "../../../component/form";
import { cn } from "../../../lib/cn";




interface AddConfirmActionProps{
  className?: string;
  onConFirmAdd: () => any;
  onConFirmCancel: () => any;
}


export function AddConfirmAction (props: AddConfirmActionProps){

  return (
    <div className={cn("flex justify-between", props.className)}>
      <OutlineButton className="px-4" variant="danger" onClick={props.onConFirmCancel} > Batal </OutlineButton>
      <OutlineButton className="px-4" variant="primary" onClick={props.onConFirmAdd} > Add </OutlineButton>
    </div>
  )
}