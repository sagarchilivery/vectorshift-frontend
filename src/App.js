import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "VectorShift | Sagar";
  }, []);
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
