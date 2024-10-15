import { ComponentPropsWithoutRef, useId } from "react";
import { cn } from "../../../lib/cn";

 


interface TextInputProps extends ComponentPropsWithoutRef<"input"> {
  inputClassName?: string
} 


export function TextInput({className, placeholder, inputClassName, ...props} : TextInputProps){

  const id = useId();

  return (
    <input 
      type="text" 
      id={id}
      className={cn(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg",
        " focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  ")
      }
      placeholder={placeholder}
      {...props}
    />
       

  )
}