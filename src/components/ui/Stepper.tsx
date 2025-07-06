import { Check } from "lucide-react";

type StepperProps = {
  totalSteps?: number;
  currentStep?: number;
};

export const Stepper = ({ totalSteps = 4, currentStep = 1 }: StepperProps) => {
  return (
    <ul className="relative flex flex-row gap-x-2 max-w-xs mx-auto">
      {Array.from({ length: totalSteps }, (_, idx) => {
        const stepNum = idx + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;

        return (
          <li key={idx} className="shrink basis-0 flex-1 group">
            <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
              <span
                className={`size-7 flex justify-center items-center shrink-0 font-bold rounded-full transition-all ${
                  isCompleted
                    ? "bg-[#258B39] text-white"
                    : isActive
                    ? "bg-[#258B39] text-white"
                    : "border border-[#00000038] text-[#2F2F2F80]"
                }`}
              >
                {isCompleted ? <Check size={16} /> : stepNum}
              </span>
              {idx < totalSteps - 1 && (
                <div className="ms-2 w-full h-px flex-1 bg-gray-200 dark:bg-neutral-700 group-last:hidden" />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
