import * as React from "react";

import { cn } from "@/libs/utils";

export interface TextAreaInputProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "border-2 min-h-[88px] w-full resize-none border-black-300 py-2 px-4 text-sm rounded-lg disabled:cursor-not-allowed disabled:opacity-50",
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
TextAreaInput.displayName = "TextAreaInput";

export default TextAreaInput;
