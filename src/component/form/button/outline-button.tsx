import { ComponentPropsWithoutRef } from "react";
import SunIcon from "../../../assets/sun.svg?react"
import { cn } from "../../../lib/cn";
 


interface OutlineButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
 * use custom to remove all default style value, so you define it's value with your style
 */
  variant?: "success" | "primary" | "warning" | "danger" | "custom" | "default"
  isLoading?: boolean;
}



export function OutlineButton({variant = "default", disabled,className, isLoading, ...props}: OutlineButtonProps){
  return (
    <button
      className={cn(
        "px-1 py-1 rounded border-2 border-primary/20 transition",
        className,
        variant === "default" && !disabled && "hover:bg-primary-light/20 hover:text-primary active:bg-primary-light/50 ",
        variant === "primary" && !disabled && " hover:bg-primary/80 active:bg-primary/70 hover:text-white",
        variant === "success" && !disabled && " hover:bg-success-dark/80 active:bg-success-dark/70 border-success/20",
        variant === "warning" && !disabled && " hover:bg-warning/80 active:bg-warning/70 border-warning/20 text-black",
        variant === "danger" && !disabled && " hover:bg-danger/80 active:bg-danger/70 border-danger/20 text-danger hover:text-white ",

        variant === "primary" && disabled && "bg-primary/50",
        variant === "success" && disabled && "bg-success-dark/50",
        variant === "warning" && disabled && "bg-warning/50",
        disabled && "cursor-not-allowed"
      )}
        {...props}
    >
      <div className="flex justify-center gap-1 items-center">
        {isLoading && <SunIcon width={20} height={20} className="animate-spin" />}
        {props.children}
      </div>
    </button>
  )
}