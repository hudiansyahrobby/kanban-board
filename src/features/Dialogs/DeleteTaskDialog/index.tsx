import Button from "@/components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { ExclamationIcon, TrashIcon } from "@/components/Icons";
import SurveyDialogMenuItem from "@/components/Menus/SurveyDialogMenu/SurveyDialogMenuItem";
import React from "react";

interface DeleteTaskDialogProps {}

const DeleteTaskDialog: React.FC<DeleteTaskDialogProps> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SurveyDialogMenuItem
          title="Delete"
          icon={<TrashIcon />}
          variant="danger"
        />
      </DialogTrigger>
      <DialogContent className="w-[420px]">
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center">
            <ExclamationIcon className="text-danger" /> <span>Delete Task</span>
          </DialogTitle>
          <DialogDescription>
            Are you sure want to delete this task? your action can’t be
            reverted.
          </DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>

            <Button type="button" variant="danger">
              Delete
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTaskDialog;
