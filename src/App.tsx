import ProductRoadmapHeader from "@/components/Header/ProductRoadmapHeader";
import GroupTaskCard, { GroupTaskCardProps } from "./features/GroupTaskCard";
import { useListTodos } from "./services/todos";
import { LoadingIcon } from "./components/Icons";
import { useCallback } from "react";

function App() {
  const { data, isPending } = useListTodos();

  const getVariant = useCallback(
    (index: number): GroupTaskCardProps["variant"] => {
      const variants: GroupTaskCardProps["variant"][] = [
        "primary",
        "warning",
        "danger",
        "success",
      ];

      if (index <= 3) {
        return variants[index];
      } else {
        const newIndex = index % 4;
        return variants[newIndex];
      }
    },
    []
  );
  return (
    <div>
      <ProductRoadmapHeader title="Product Roadmap" />
      <div className="flex gap-2 max-w-[1352px] mx-auto py-6 overflow-x-auto">
        {isPending ? (
          <LoadingIcon className="mx-auto animate-spin text-primary" />
        ) : (
          data?.map((item, idx) => (
            <GroupTaskCard
              description={item.description}
              title={item.title}
              variant={getVariant(idx)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
