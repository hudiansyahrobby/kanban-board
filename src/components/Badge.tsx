import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[4px] border px-2 py-1 text-xs",
  {
    variants: {
      variant: {
        primary: "border-primary-100 border bg-primary-50 text-primary",
        success: "border-success-100 border bg-success-50 text-success",
        danger: "border-danger-100 border bg-danger-50 text-danger",
        warning: "border-warning-100 border bg-warning-50 text-warning",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export default Badge;
