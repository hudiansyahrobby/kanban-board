import * as DialogPrimitive from "@radix-ui/react-dialog";

import DialogContent from "@/components/Dialog/DialogContent";
import DialogDescription from "@/components/Dialog/DialogDescription";
import DialogFooter from "@/components/Dialog/DialogFooter";
import DialogHeader from "@/components/Dialog/DialogHeader";
import DialogOverlay from "@/components/Dialog/DialogOverlay";
import DialogTitle from "@/components/Dialog/DialogTitle";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
