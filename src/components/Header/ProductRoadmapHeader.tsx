import AddNewGroupDialog from "@/features/Dialogs/AddNewGroupDialog";
import React from "react";

interface ProductRoadmapHeaderProps {
  title: string;
}

const ProductRoadmapHeader: React.FC<ProductRoadmapHeaderProps> = ({
  title,
}) => {
  return (
    <div className="p-4 border-b border-black-100">
      <div className="flex items-center gap-4 max-w-[1352px] mx-auto">
        <h2 className="font-bold text-lg font-nunitoSans ">{title}</h2>

        <AddNewGroupDialog />
      </div>
    </div>
  );
};

export default ProductRoadmapHeader;
