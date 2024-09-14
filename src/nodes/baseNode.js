// baseNode.js
import { Handle } from "reactflow";
import { useState } from "react";
import Dropdown from "../components/dropdown";

export const BaseNode = ({
  children,
  id,
  data,
  type,
  handles,
  config,
  setText,
}) => {
  const [currName, setCurrName] = useState(
    data?.[config.nameField] || id.replace(config.idPrefix, config.defaultName)
  );
  const [currType, setCurrType] = useState(
    data?.[config.typeField] || config.defaultType
  );

  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (value) => setCurrType(value);
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    if (setText) setText(e.target.value); // Call setText if it is passed
  };

  return (
    <div className=" border rounded-md min-h-[80px] min-w-[200px] text-white backdrop-blur-[1.5px]">
      {/* Source handle */}
      <Handle {...handles.source} />

      {/* Target handles */}
      {handles.targets?.map((handle, index) => (
        <Handle key={index} {...handle} />
      ))}

      {/* Node title */}
      <div className=" border-b px-5 py-1.5">
        <span>{config.title}</span>
      </div>

      <div className="flex flex-col gap-3 px-5 py-2 pb-5">
        {/* Name field if present */}
        {config.hasNameField && (
          <div className="flex gap-1.5 items-center">
            <label>Name</label>
            <input
              type="text"
              value={currName}
              className="ml-2 h-8 border-none outline-none focus:outline-none ring-0 focus:ring-0 pl-3 rounded-md bg-[#18181883]"
              onChange={handleNameChange}
            />
          </div>
        )}

        {/* Type field if present */}
        {config.hasTypeField && (
          <div className="flex w-full gap-5">
            <label>Type:</label>
            <Dropdown
              caption={currType}
              options={config.typeOptions.map((option) => option.value)}
              onSelect={handleTypeChange} // Use the callback to update the type
            />
          </div>
        )}

        {/* Custom content if provided in config */}
        {config.customContent &&
          config.customContent({
            text: currText,
            onTextChange: handleTextChange,
          })}

        {/* Children content passed from the parent */}
        <div>{children}</div>
      </div>
    </div>
  );
};
