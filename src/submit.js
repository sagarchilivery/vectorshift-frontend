// submit.js
import { useStore } from "./store";

export const SubmitButton = () => {
  // Accessing nodes and edges from the store
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const HandleSubmit = async () => {
    console.log("nodes: ", nodes);
    console.log("edges: ", edges);
  };
  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className="bg-gradient-to-r hover:from-[#6639aa] from-[#723fbe] hover:via-[#3a5aa9] via-[#456AC6] hover:to-[#31608c] to-[#207DD6] text-md px-8 h-8 text-white rounded-2xl shadow-lg"
        style={{
          fontWeight: "600",
        }}
        onClick={HandleSubmit}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};
