import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "@/components/Icons";
import SurveyDialogMenuItem from "@/components/Menus/SurveyDialogMenu/SurveyDialogMenuItem";
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

      <SurveyDialogMenuItem
        title="Delete"
        icon={<TrashIcon />}
        variant="danger"
      />
    </div>
  );
};

export default SurveyDialogMenu;
