import ProductRoadmapHeader from "@/components/Header/ProductRoadmapHeader";
import GroupTaskCard from "./features/GroupTaskCard";

function App() {
  return (
    <div>
      <ProductRoadmapHeader title="Product Roadmap" />
      <div className="flex gap-3 max-w-[1352px] mx-auto py-6">
        <GroupTaskCard period="January - March" title="Group Task 1" />

        <GroupTaskCard
          period="April - June"
          variant="warning"
          title="Group Task 2"
        />
        <GroupTaskCard
          period="July - September"
          variant="danger"
          title="Group Task 3"
        />
        <GroupTaskCard
          period="October - December"
          variant="success"
          title="Group Task 4"
        />
      </div>
    </div>
  );
}

export default App;
