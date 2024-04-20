import React from "react";
import Button from "@/components/Button";
import { PlusIcon } from "@/components/Icons";

interface ProductRoadmapHeaderProps {
  title: string;
}

const ProductRoadmapHeader: React.FC<ProductRoadmapHeaderProps> = ({
  title,
}) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-black-100">
      <h2 className="font-bold text-lg font-nunitoSans ">{title}</h2>

      <Button>
        <PlusIcon className="mr-2" /> Add New Group
      </Button>
    </div>
  );
};

export default ProductRoadmapHeader;
