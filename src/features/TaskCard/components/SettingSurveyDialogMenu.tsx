import { ThreeDotsHorizontalIcon } from "@/components/Icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import SurveyDialogMenu from "@/features/TaskCard/components/SurveyDialogMenu";
import React from "react";

interface SettingSurveyDialogMenuProps {}

const SettingSurveyDialogMenu: React.FC<SettingSurveyDialogMenuProps> = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="cursor-pointer">
          <ThreeDotsHorizontalIcon />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 flex flex-col gap-2" align="start">
        <SurveyDialogMenu />
      </PopoverContent>
    </Popover>
  );
};

export default SettingSurveyDialogMenu;
