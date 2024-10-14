import { OutlineButton } from "../../../component/form";
import WarningIcon from "./../../../assets/warning.svg?react";



interface RemoveConfirmProps {
  id: string;
  onRemove: () => any;
  onCancel: () => any;
}



export function RemoveConfirm(props: RemoveConfirmProps){


  function handleOnDelete(){

    props.onRemove()
  }


  function handleOnCancel(){

    props.onCancel();
  }

  return(
    <div className="">
      <WarningIcon className="w-8 mx-auto text-danger bg-danger/30 p-1 rounded-full" />
      <p className="text-center mb-2">Yakin ingin menghapus note ini ?</p>
      <div className="flex justify-center gap-3">
        <OutlineButton className="px-2" variant="danger" onClick={handleOnCancel} >Batal</OutlineButton>
        <OutlineButton className="px-2" onClick={handleOnDelete} >Iya</OutlineButton>
      </div>
    </div>
  )
}