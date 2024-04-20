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

const AddNewGroupDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
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
            <NewGroupForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewGroupDialog;
