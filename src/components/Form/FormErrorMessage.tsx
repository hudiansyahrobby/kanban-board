import React, { forwardRef } from "react";

import { cn } from "@/libs/utils";

const FormErrorMessage = forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ children, className, ...props }, ref) => {
  return (
    <p
      className={cn("text-danger text-[10px] leading-5 font-bold", className)}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  );
});

export default FormErrorMessage;
