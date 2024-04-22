import React, { useState } from "react";

import { ThreeDotsHorizontalIcon } from "@/components/Icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";

import SurveyDialogMenu from "@/features/GroupTaskCard/components/SurveyDialogMenu";

interface SettingSurveyDialogMenuProps {
  handleClick: () => void;
}

const SettingSurveyDialogMenu: React.FC<SettingSurveyDialogMenuProps> = ({
  handleClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div
          className="cursor-pointer"
          onClick={() => {
            handleClick();
            setIsOpen(true);
          }}
        >
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
