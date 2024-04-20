import * as React from "react";

import { cn } from "@/libs/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "border-2 h-9 border-black-300 py-2 px-4 rounded-lg disabled:cursor-not-allowed disabled:opacity-50 text-xs",
          props.value
            ? "focus-visible:outline-primary-100"
            : "focus-visible:outline-primary-100/20",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
