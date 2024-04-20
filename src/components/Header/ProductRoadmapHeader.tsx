import AddNewGroupDialog from "@/features/Dialogs/AddNewGroupDialog";
import React from "react";

interface ProductRoadmapHeaderProps {
  title: string;
}

const ProductRoadmapHeader: React.FC<ProductRoadmapHeaderProps> = ({
  title,
}) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-black-100">
      <h2 className="font-bold text-lg font-nunitoSans ">{title}</h2>

      <AddNewGroupDialog />
    </div>
  );
};

export default ProductRoadmapHeader;
