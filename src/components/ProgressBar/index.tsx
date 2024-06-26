import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/libs/utils";
import { CheckListIcon } from "../Icons";

const ProgressBar = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    containerClassName: string;
  }
>(({ className, value, containerClassName, ...props }, ref) => {
  const isFullProgress = value === 100;

  return (
    <div className={cn("flex items-center gap-3", containerClassName)}>
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-black-300",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all",
            isFullProgress ? "bg-success" : "bg-primary"
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>

      {isFullProgress ? (
        <CheckListIcon className="text-success size-4" />
      ) : (
        <span className="text-xs text-black-500">{`${value}%`}</span>
      )}
    </div>
  );
});

ProgressBar.displayName = ProgressPrimitive.Root.displayName;

export default ProgressBar;
