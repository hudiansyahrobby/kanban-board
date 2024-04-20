import { PlusCircleIcon } from "@/components/Icons";

import React, { forwardRef } from "react";

const NewTaskButton = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => {
  return (
    <div
      className="cursor-pointer flex items-center gap-1"
      ref={ref}
      {...props}
    >
      <PlusCircleIcon />

      <span className="text-xs text-black">New Task</span>
    </div>
  );
});

export default NewTaskButton;
