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
    title: "Ghost Rider",
    idPrefix: "customInput-",
    defaultName: "input_",
    nameField: "inputName",
    typeField: "inputType",
    defaultType: "Options",
    hasTypeField: true,
    typeOptions: [
      { value: "Skeleton", label: "Text" },
      { value: "Wheels on fire", label: "File" },
    ],
  };

  return <BaseNode {...props} handles={handles} config={config} />;
};
