// inputNode.js

import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const InputNode = (props) => {
  const handles = {
    source: {
      type: "source",
      position: Position.Right,
      id: `${props.id}-value`,
    },
  };

  const config = {
    title: "Input",
    idPrefix: "customInput-",
    defaultName: "input_",
    nameField: "inputName",
    typeField: "inputType",
    defaultType: "Text",
    hasNameField: true,
    hasTypeField: true,
    typeOptions: [
      { value: "Text", label: "Text" },
      { value: "File", label: "File" },
    ],
  };

  return <BaseNode {...props} handles={handles} config={config} />;
};
