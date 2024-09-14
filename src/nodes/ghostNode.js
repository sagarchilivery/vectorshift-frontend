// inputNode.js

import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const GhostNode = (props) => {
  const handles = {
    source: {
      type: "source",
      position: Position.Right,
      id: `${props.id}-value`,
    },
  };

  const config = {
    title: "Ghost",
    idPrefix: "customInput-",
    defaultName: "input_",
    nameField: "inputName",
    typeField: "inputType",
    defaultType: "Text",
    hasTypeField: true,
    typeOptions: [
      { value: "White", label: "Text" },
      { value: "Wheels on fire", label: "File" },
    ],
  };

  return <BaseNode {...props} handles={handles} config={config} />;
};
