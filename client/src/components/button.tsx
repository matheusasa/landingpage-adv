import { cn } from "../../lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-3
        rounded-md
        border-2
        px-5
        py-3
        border-white
        text-white
        font-semibold
        transition`,
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
