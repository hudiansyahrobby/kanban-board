import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/libs/utils";
import { LoadingIcon } from "@/components/Icons";

const buttonVariants = cva(
  "inline-flex items-center tracking-wide justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 px-4 py-1.5",
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

function Button({
  className,
  isLoading,
  children,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {children}
      {isLoading && <LoadingIcon className="size-3 animate-spin ml-1.5" />}
    </button>
  );
}

export default Button;
