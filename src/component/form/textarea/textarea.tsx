import { ChangeEvent, ComponentPropsWithoutRef, useState } from "react";
import { cn } from "../../../lib/cn";


interface TextAreaProps extends ComponentPropsWithoutRef<"textarea"> {

}

export function TextArea({className, onChange,  ...props}: TextAreaProps){

  const [charCount, setCharCount] = useState(0);

  function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>){
    setCharCount(e.target.value?.length);
    if(onChange) onChange(e);
  }

  return (
    <div className={className}>
      <textarea 
        onChange={handleOnChange}
        className={cn(
          "border w-full mb-0 bg-secondary-dark p-1 px-2",
          " focus-within:bg-white focus-within:outline-primary-light focus-within:outline-dashed"
        )}
        name="" 
        id=""
        {...props}
      ></textarea>
      <p className="leading-none text-primary-light">
        {charCount} chars
      </p>
    </div>
  )

}