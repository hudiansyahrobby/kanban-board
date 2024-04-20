import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import React from "react";
import EditTaskButton from "./components/EditTaskButton";
import NewTaskButton from "./components/NewTaskButton";
import TaskForm from "./components/TaskForm";

interface TaskDialogProps {
  isEdit?: boolean;
}

const TaskDialog: React.FC<TaskDialogProps> = ({ isEdit }) => {
  const title = isEdit ? "Edit Task" : "Create Task";

  return (
    <Dialog>
      <DialogTrigger asChild>
        {isEdit ? <EditTaskButton /> : <NewTaskButton />}
      </DialogTrigger>
      <DialogContent className="w-[420px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription asChild>
            <TaskForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
