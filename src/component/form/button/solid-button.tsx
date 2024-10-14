

import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

 


interface OutlineButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * use custom to remove all default style value, so you define it's value with your style
   */
  variant?: "success" | "primary" | "warning" | "danger" | "base" | "custom";
}



export function SolidButton({variant = "primary", disabled, className,  ...props}: OutlineButtonProps){
  return (
    <button
      className={clsx(
        "px-1 py-1 rounded transition",
        className,
        variant === "primary" && !disabled && "bg-primary text-white hover:bg-primary/80 active:bg-primary/70",
        variant === "success" && !disabled && "bg-success-dark hover:bg-success-dark/80 active:bg-success-dark/70",
        variant === "warning" && !disabled && "bg-warning hover:bg-warning/80 active:bg-warning/70 text-black",
        variant === "base" && !disabled && "bg-gray-600 hover:bg-gray-600/80 active:bg-gray/70 text-gray-300",

        variant === "primary" && disabled && "bg-primary/50 text-white",
        variant === "success" && disabled && "bg-success-dark/50",
        variant === "warning" && disabled && "bg-warning/50",
        variant === "base" && disabled && "bg-gray-600/50 text-gray-500",
        disabled && "cursor-not-allowed"
      )}
      {...props}
    >
      {props.children}
    </button>
  )
}