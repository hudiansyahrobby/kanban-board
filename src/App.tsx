import { Popover, PopoverContent, PopoverTrigger } from "./components/Popover";

function App() {
  return (
    <div className="p-10">
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent side="bottom" sideOffset={10} align="start">
          Place content for the popover here.
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default App;
