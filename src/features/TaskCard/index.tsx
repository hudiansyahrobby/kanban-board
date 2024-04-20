import ProgressBar from "@/components/ProgressBar";
import { cn } from "@/libs/utils";
import React from "react";
import SettingSurveyDialogMenu from "./components/SettingSurveyDialogMenu";

interface TaskCardProps {
  title: string;
  progress: number;
  id: number;
  className: string;
  isEmpty: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({
  progress,
  title,
  className,
  isEmpty,
}) => {
  return (
    <div
      className={cn(
        "border border-black-100 rounded-[4px] p-4 bg-black-400 w-[298px]",
        className
      )}
    >
      {isEmpty ? (
        <h2 className="text-sm leading-6 text-black-500">No Task</h2>
      ) : (
        <>
          <h2 className="font-bold text-sm leading-6 pb-2 mb-2 border-b border-dashed border-black-100">
            {title}
          </h2>

          <div className="flex justify-between gap-4">
            <ProgressBar
              value={progress}
              containerClassName="grow-0 shrink-0 basis-[216px]"
            />

            <SettingSurveyDialogMenu />
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
