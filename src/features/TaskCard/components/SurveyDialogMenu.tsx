import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EditIcon,
  TrashIcon,
} from "@/components/Icons";
import SurveyDialogMenuItem from "@/components/Menus/SurveyDialogMenu/SurveyDialogMenuItem";

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

      <SurveyDialogMenuItem
        title="Edit"
        icon={<EditIcon />}
        variant="primary"
      />

      <SurveyDialogMenuItem
        title="Delete"
        icon={<TrashIcon />}
        variant="danger"
      />
    </div>
  );
};

export default SurveyDialogMenu;
