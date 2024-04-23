import React, { forwardRef } from "react";

import { cn } from "@/libs/utils";

const FormLabel = forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<"label">
>(({ children, className, ...props }, ref) => {
  return (
    <label
      className={cn(
        "text-black-50 text-left text-xs leading-5 font-bold",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </label>
  );
});

export default FormLabel;
