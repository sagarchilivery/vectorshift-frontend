// outputNode.js

import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const OutputNode = (props) => {
  const handles = {
    source: {
      type: "target",
      position: Position.Left,
      id: `${props.id}-value`,
    },
  };

  const config = {
    title: "Output",
    idPrefix: "customOutput-",
    defaultName: "output_",
    nameField: "outputName",
    typeField: "outputType",
    defaultType: "Text",
    hasNameField: true,
    hasTypeField: true,
    typeOptions: [
      { value: "Text", label: "Text" },
      { value: "File", label: "Image" },
    ],
  };

  return <BaseNode {...props} handles={handles} config={config} />;
};
