import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-4 py-1.5",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-[0px_1px_2px_0px_#0000001F] hover:bg-primary/90",
        danger:
          "bg-danger text-white shadow-[0px_1px_2px_0px_#0000001F] hover:bg-danger/90",
        outline:
          "border border-black-100 bg-white shadow-[0px_1px_2px_0px_#0000001F] text-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}

export default Button;
