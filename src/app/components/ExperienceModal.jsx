// components/ExperienceModal.jsx
import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

const ExperienceModal = ({ onClose, jobs }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-[#121212] rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Professional Experience
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
        <ExperienceTimeline jobs={jobs} />
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full text-white hover:opacity-90 transition-opacity"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ExperienceModal;
