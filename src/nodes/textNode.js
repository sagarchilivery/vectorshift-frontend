// // // textNode.js

// import { useState } from "react";
// import { BaseNode } from "./baseNode";
// import { Position } from "reactflow";

// export const TextNode = (props) => {
//   const [text, setText] = useState(props.data?.text || "{{input}}");
//   const [nodeSize, setNodeSize] = useState({ width: 200, height: 30 });
//   const [isValid, setIsValid] = useState(true); // State to track validation
//   const [isFocused, setIsFocused] = useState(false); // State to track focus
//   console.log("isFocused: ", isFocused);

//   // Function to validate JavaScript variable names
//   const validateVariable = (str) => {
//     // Check if string starts and ends with {{ and }} and also checking it doesnt have any whitespace
//     const isCurlyBraced = /^\{\{([a-zA-Z_$][a-zA-Z_$0-9]*)\}\}$/.test(str);

//     if (isCurlyBraced) {
//       // Extract the variable name by removing the curly brackets
//       const variableName = str.slice(2, -2).trim();
//       // Validate if the remaining string is a valid JavaScript variable name
//       const isValidVariable = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(variableName);
//       return isValidVariable;
//     }
//     return false; // If it doesn't have {{ }} around it
//   };

//   // Function to update text and dynamically adjust node size
//   const handleTextChange = (e) => {
//     const newText = e.target.value;
//     setText(newText);

//     // Validate the input text
//     const isValidInput = validateVariable(newText);
//     setIsValid(isValidInput); // Set validation result to state

//     // Adjust node width based on text length
//     const newWidth = Math.min(250, Math.max(200, newText.length * 10));

//     // Use scrollHeight to adjust height based on content
//     const textareaElement = e.target;
//     const newHeight = Math.min(150, textareaElement.scrollHeight);

//     setNodeSize({ width: newWidth, height: newHeight });

//     // Check if there are any valid JavaScript variable names inside double curly brackets
//     const varMatches = newText.match(/\{\{([a-zA-Z_$][a-zA-Z_$0-9]*)\}\}/g);

//     // Generate new handles for each match
//     if (varMatches) {
//       const newHandles = varMatches.map((match, index) => ({
//         id: `${props.id}-${match}`,
//         position: Position.Left,
//         style: { top: `${(index + 1) * 20}px` },
//       }));
//       // setHandles(newHandles);
//     } else {
//       // setHandles([]); // Reset handles if no matches
//     }
//   };

//   const handles = {
//     source: {
//       type: "source",
//       position: Position.Right,
//       id: `${props.id}-response`,
//     },
//     targets: [
//       {
//         type: "target",
//         position: Position.Left,
//         id: `${props.id}-prompt`,
//         style: { top: `${200 / 3}%` },
//       },
//     ],
//   };

//   const config = {
//     title: "Text",
//     customContent: () => (
//       <div className="flex items-start border-[#ccc0]">
//         <label>Text:</label>
//         <textarea
//           value={text}
//           onChange={handleTextChange}
//           onBlur={() => {
//             setIsFocused(false);
//           }}
//           onFocus={() => {
//             setIsFocused(true);
//           }}
//           className="ml-2 h-8 border-none outline-none focus:outline-none ring-0 focus:ring-0 pl-3 rounded-md bg-[#18181883] resize-none"
//           style={{
//             width: `${nodeSize.width}px`,
//             height: `${nodeSize.height}px`,
//             maxWidth: "250px",
//             maxHeight: "150px",
//             minWidth: "200px", // Prevent shrinking width
//             minHeight: "30px", // Prevent shrinking height
//             overflow: "auto", // Enable scrolling
//             boxSizing: "border-box", // Ensure border size is included in dimensions
//             border: isValid ? "1px solid #ccc0" : "1px solid red", // Red border on invalid input
//           }}
//         />
//       </div>
//     ),
//   };

//   return (
//     <BaseNode
//       {...props}
//       handles={handles}
//       config={config}
//       setText={props.setText}
//     ></BaseNode>
//   );
// };

// ____________________________________
import { useState } from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const TextNode = (props) => {
  const [text, setText] = useState(props.data?.text || "{{input}}");
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 30 });
  const [isValid, setIsValid] = useState(true); // State to track validation

  // Function to validate JavaScript variable names
  const validateVariable = (str) => {
    // Check if string starts and ends with {{ and }} and also checking it doesn't have any whitespace
    const isCurlyBraced = /^\{\{([a-zA-Z_$][a-zA-Z_$0-9]*)\}\}$/.test(str);

    if (isCurlyBraced) {
      // Extract the variable name by removing the curly brackets
      const variableName = str.slice(2, -2).trim();
      // Validate if the remaining string is a valid JavaScript variable name
      const isValidVariable = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(variableName);
      return isValidVariable;
    }
    return false; // If it doesn't have {{ }} around it
  };

  // Function to update text and dynamically adjust node size
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Validate the input text
    const isValidInput = validateVariable(newText);
    setIsValid(isValidInput); // Set validation result to state

    // Adjust node width based on text length
    const newWidth = Math.min(250, Math.max(200, newText.length * 10));

    // Use scrollHeight to adjust height based on content
    const textareaElement = e.target;
    const newHeight = Math.min(150, textareaElement.scrollHeight);

    setNodeSize({ width: newWidth, height: newHeight });
  };

  // Conditionally include the target handle if the text is valid
  const handles = {
    source: {
      type: "source",
      position: Position.Right,
      id: `${props.id}-response`,
    },
    targets: isValid
      ? [
          {
            type: "target",
            position: Position.Left,
            id: `${props.id}-prompt`,
            style: { top: `${200 / 3}%` },
          },
        ]
      : [], // No target handle if the input is invalid
  };

  const config = {
    title: "Text",
    customContent: () => (
      <div className="flex items-start border-[#ccc0]">
        <label>Text:</label>
        <textarea
          value={text}
          onChange={handleTextChange}
          className="ml-2 h-8 border-none outline-none focus:outline-none ring-0 focus:ring-0 pl-3 rounded-md bg-[#18181883] resize-none"
          style={{
            width: `${nodeSize.width}px`,
            height: `${nodeSize.height}px`,
            maxWidth: "250px",
            maxHeight: "150px",
            minWidth: "200px", // Prevent shrinking width
            minHeight: "30px", // Prevent shrinking height
            overflow: "auto", // Enable scrolling
            boxSizing: "border-box", // Ensure border size is included in dimensions
            border: isValid ? "1px solid #ccc0" : "1px solid red", // Red border on invalid input
          }}
        />
      </div>
    ),
  };

  return (
    <BaseNode
      {...props}
      handles={handles}
      config={config}
      setText={props.setText}
    />
  );
};
