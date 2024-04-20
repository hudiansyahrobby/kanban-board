import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import Badge from "@/components/Badge";
import TaskCard from "./components/TaskCard";
import TaskDialog from "../Dialogs/TaskDialog";

const groupTaskCardVariants = cva("p-4 border rounded-[4px]", {
  variants: {
    variant: {
      primary: "border-primary bg-primary-50",
      success: "border-success bg-success-50",
      danger: "border-danger bg-danger-50",
      warning: "border-warning bg-warning-50",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface GroupTaskCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof groupTaskCardVariants> {
  period: string;
  title: string;
}

const GroupTaskCard = ({
  className,
  variant,
  period,
  title,
  ...props
}: GroupTaskCardProps) => {
  return (
    <div
      className={cn(
        groupTaskCardVariants({ variant }),
        "flex flex-col gap-3 items-start",
        className
      )}
      {...props}
    >
      <Badge variant={variant}>{title}</Badge>

      <h2 className="font-bold text-xs leading-5 text-black-50">{period}</h2>

      <TaskCard
        id={1}
        title="Re-designed the zero-g doggie bags. No more spills!"
        progress={100}
      />

      <TaskCard
        id={2}
        title="Bundle interplanetary analytics for improved transmission"
        progress={30}
      />

      <TaskDialog />
    </div>
  );
};

export default GroupTaskCard;
