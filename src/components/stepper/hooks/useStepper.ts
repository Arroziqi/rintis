// Hook untuk handle stepper logic
import { useState } from 'react';

interface UseStepperProps {
  totalSteps: number;
}

const useStepper = ({ totalSteps }: UseStepperProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const next = () => {
    setCurrentStep((prev: number) => (prev < totalSteps - 1 ? prev + 1 : prev));
  };

  const prev = () => {
    setCurrentStep((prev: number) => (prev > 0 ? prev - 1 : prev));
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      setCurrentStep(step);
    }
  };

  return { currentStep, next, prev, goToStep };
};

export default useStepper;
