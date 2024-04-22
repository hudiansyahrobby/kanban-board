import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import NewGroupForm from "./components/NewGroupForm";
import Button from "@/components/Button";
import { PlusIcon } from "@/components/Icons";
import { useState } from "react";

const AddNewGroupDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <div>
          <Button>
            <PlusIcon className="mr-2" /> Add New Group
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[420px]">
        <DialogHeader>
          <DialogTitle>Add New Group</DialogTitle>
          <DialogDescription asChild>
            <NewGroupForm onSuccess={() => setIsOpen(false)} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewGroupDialog;
