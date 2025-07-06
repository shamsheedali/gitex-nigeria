import { X } from "lucide-react";
import { Checkbox } from "./Checkbox";
import layoutBg from "@/assets/images/common/layout-bg.png";
import { Button } from "./button/Button";

const workshops = [
  "Global Leaders Forum !NEW (3 Days)",
  "GITEX Main Stage",
  "Artificial Intelligence & Robotics (15)",
  "AI Everything (4 Days)",
  "Cybersecurity (4 Days)",
  "Future Health !NEW (2 Days)",
  "Digital Cities (1 Day)",
  "Edtech (1 Day)",
  "Energy Transition (1 Day)",
  "Intelligent Connectivity (1 Day)",
  "Digital Finance (1 Day)",
  "Future Mobility (1 Day)",
];

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl mt-10 mb-10 overflow-hidden">
        {/* Header */}
        <div
          className="px-6 py-4 flex justify-between items-center bg-cover"
          style={{ backgroundImage: `url(${layoutBg})` }}
        >
          <h2 className="text-white font-bold text-lg sm:text-xl">
            SELECT WORKSHOPS
          </h2>
          <div
            className="border-2 border-white h-fit w-fit p-2 rounded-full flex justify-center items-center"
            onClick={onClose}
          >
            <button className="cursor-pointer" aria-label="Close">
              <X className="text-white" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[75vh] overflow-y-auto px-6 py-6 space-y-6">
          <input
            type="text"
            placeholder="Try Product/Service"
            className="w-full border rounded-md px-4 py-2"
          />

          <p className="text-sm text-gray-700">
            I Am Interested In Sourcing The Following Solutions/Products?
            (Select Top 5) * Please Ensure You Have Chosen At Least One Category
            In Each Section
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-[#E3E3E3]">
            {workshops.map((title, index) => (
              <Checkbox key={index} id={`workshop-${index}`} label={title} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:justify-end gap-4 px-6 py-3 text-sm">
          <Button
            title="cancel"
            className="border-2 border-black font-bold"
            size="sm"
            style={{ color: "black" }}
            onClick={onClose}
          />
          <Button
            title="apply"
            className="font-bold bg-gradient-green"
            size="sm"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
