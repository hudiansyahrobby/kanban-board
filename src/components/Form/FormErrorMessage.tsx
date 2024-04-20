import React, { forwardRef } from "react";

import { cn } from "@/libs/utils";

const FormErrorMessage = forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ children, className, ...props }, ref) => {
  return (
    <p
      className={cn("text-danger text-xs leading-5", className)}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  );
});

export default FormErrorMessage;
