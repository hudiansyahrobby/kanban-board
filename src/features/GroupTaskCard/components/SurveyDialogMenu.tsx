import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";
import SurveyDialogMenuItem from "@/components/Menus/SurveyDialogMenu/SurveyDialogMenuItem";
import DeleteTaskDialog from "@/features/Dialogs/DeleteTaskDialog";
import TaskDialog from "@/features/Dialogs/TaskDialog";

const SurveyDialogMenu = () => {
  return (
    <div className="flex flex-col gap-3">
      <SurveyDialogMenuItem
        title="Move Right"
        icon={<ArrowRightIcon />}
        variant="primary"
      />

      <SurveyDialogMenuItem
        title="Move Left"
        icon={<ArrowLeftIcon />}
        variant="primary"
      />

      <TaskDialog isEdit />

      <DeleteTaskDialog />
    </div>
  );
};

export default SurveyDialogMenu;
