import { OutlineButton } from "../../../component/form";
import { appNoteService } from "../../../service";
import WarningIcon from "./../../../assets/warning.svg?react";



interface RemoveConfirmProps {
  id: string;
  onRemove: () => any;
  onCancel: () => any;
}



export function RemoveConfirm(props: RemoveConfirmProps){


  async function handleOnDelete(){
    await appNoteService.deleteNote(props.id);
    props.onRemove()
  }


  function handleOnCancel(){

    props.onCancel();
  }

  return(
    <div className="">
      <WarningIcon className="w-8 mx-auto text-danger bg-danger/30 p-1 rounded-full" />
      <p className="text-center mb-2">Are you sure you want to delete this note?</p>
      <div className="flex justify-center gap-3">
        <OutlineButton className="px-2" variant="danger" onClick={handleOnCancel} >Cancel</OutlineButton>
        <OutlineButton className="px-2" onClick={handleOnDelete} >confirm</OutlineButton>
      </div>
    </div>
  )
}