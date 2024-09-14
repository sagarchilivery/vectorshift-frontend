// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`bg-[#1d0c4ace] hover:bg-[#1d0c4a] border-blue-800 flex flex-col items-center min-w-[125px] justify-center border ${type} backdrop-blur-2xl cursor-grab px-6 rounded-md h-10`}
      onDragStart={(event) => {
        onDragStart(event, type) && (event.target.style.cursor = "grabbing");
      }}
      F
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="font-sans font-semibold text-white ">{label}</span>
    </div>
  );
};
