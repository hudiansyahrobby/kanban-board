import { EditIcon } from "@/components/Icons";
import SurveyDialogMenuItem from "@/components/Menus/SurveyDialogMenu/SurveyDialogMenuItem";

import React, { forwardRef } from "react";

const EditTaskButton = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => {
  return (
    <SurveyDialogMenuItem
      ref={ref}
      title="Edit"
      icon={<EditIcon />}
      variant="primary"
      {...props}
    />
  );
});

export default EditTaskButton;
