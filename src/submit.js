// submit.js

export const SubmitButton = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <button
        className="bg-gradient-to-r hover:from-[#6639aa] from-[#723fbe] hover:via-[#3a5aa9] via-[#456AC6] hover:to-[#31608c] to-[#207DD6] text-md px-8 h-8 text-white rounded-2xl shadow-lg"
        style={{
          fontWeight: "600",
        }}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};
