/* eslint-disable no-unused-vars */
// submit.js
import { useState } from "react";
import { useStore } from "./store";

export const SubmitButton = () => {
  // Accessing nodes and edges from the store
  const num_nodes = useStore((state) => state.nodes);
  const num_edges = useStore((state) => state.edges);
  const [response, setResponse] = useState(null);

  const HandleSubmit = async () => {
    const pipelineData = {
      nodes: num_nodes.map((node) => ({ id: node.id })),
      edges: num_edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
      })),
    };

    try {
      // Make the API request
      const res = await fetch(
        "https://vectorshift-backend.onrender.com/pipelines/parse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pipelineData),
        }
      );

      // Parse the JSON response
      const data = await res.json();

      // Show alert with the result
      alert(
        `Number of nodes: ${data.num_nodes}, Number of edges: ${data.num_edges}, Is DAG: ${data.is_dag}`
      );
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
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
