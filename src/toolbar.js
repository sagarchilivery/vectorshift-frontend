// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      //  className=" bg-[#5B00EC]"
      className="bg-gradient-to-r from-gradientStart via-gradientMiddle to-gradientEnd animate-[gradientMove_5s_linear_infinite]"
      style={{ padding: "10px" }}
    >
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
      </div>
    </div>
  );
};
