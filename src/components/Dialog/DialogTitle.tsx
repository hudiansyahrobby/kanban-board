import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/libs/utils";
import { CloseIcon } from "../Icons";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <div className="flex justify-between items-center gap-3 mb-3">
    <DialogPrimitive.Title
      ref={ref}
      className={cn("text-black font-bold text-lg", className)}
      {...props}
    />

    <DialogPrimitive.Close className="rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
      <CloseIcon className="text-black-50" />
      <span className="sr-only">Close</span>
    </DialogPrimitive.Close>
  </div>
));

DialogTitle.displayName = DialogPrimitive.Title.displayName;

export default DialogTitle;
