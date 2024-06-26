import { cn } from "@/libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const menuVariants = cva("text-black-200", {
  variants: {
    variant: {
      primary: "group-hover:text-primary transition-colors",
      danger: "group-hover:text-danger transition-colors",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface SurveyDialogMenuItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menuVariants> {
  icon: React.ReactNode;
  title: string;
}

const SurveyDialogMenuItem = React.forwardRef<
  HTMLDivElement,
  SurveyDialogMenuItemProps
>(({ className, icon, title, variant, ...props }, ref) => (
  <div
    className={cn("flex items-center gap-3 group cursor-pointer", className)}
    ref={ref}
    {...props}
  >
    <div className={menuVariants({ variant })}>{icon}</div>

    <span
      className={cn(
        menuVariants({ variant }),
        "text-sm font-semibold tracking-[0.2px]"
      )}
    >
      {title}
    </span>
  </div>
));

SurveyDialogMenuItem.displayName = "SurveyDialogMenuItem";

export default SurveyDialogMenuItem;
