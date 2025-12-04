// src/components/ExampleComponent.tsx
'use client';

import React, { useState } from 'react';
import { FiPackage, FiSettings, FiUser } from 'react-icons/fi';
import {
  StepperControls,
  StepperProgress,
  StepperProvider,
} from '@/components/stepper';
import Stepper from '@/components/stepper/stepper/Stepper';

const ExampleComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Account',
      description: 'Create account',
      icon: <FiUser />,
    },
    {
      id: 2,
      title: 'Profile',
      description: 'Setup profile',
      icon: <FiSettings />,
    },
    {
      id: 3,
      title: 'Services',
      description: 'Select services',
      icon: <FiPackage />,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    alert('Process completed!');
  };

  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Wrap dengan StepperProvider jika pakai useStepperContext di dalam */}
      <StepperProvider
        steps={steps}
        initialStep={currentStep}
        onStepChange={handleStepChange}
      >
        {/* Stepper indicator */}
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepClick={handleStepChange}
          orientation="horizontal"
          variant="detailed"
        />

        {/* Progress bar */}
        <div style={{ margin: '20px 0' }}>
          <StepperProgress
            currentStep={currentStep}
            totalSteps={steps.length}
            showPercentage={true}
          />
        </div>

        {/* Content berdasarkan step */}
        <div
          style={{
            padding: '24px',
            background: '#f8fafc',
            borderRadius: '8px',
            margin: '20px 0',
          }}
        >
          {currentStep === 0 && (
            <div>
              <h3>Step 1: Account Setup</h3>
              <p>Please create your account...</p>
            </div>
          )}
          {currentStep === 1 && (
            <div>
              <h3>Step 2: Profile Information</h3>
              <p>Tell us about yourself...</p>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <h3>Step 3: Select Services</h3>
              <p>Choose your services...</p>
            </div>
          )}
        </div>

        {/* Controls */}
        <StepperControls
          onNext={handleNext}
          onPrev={handlePrev}
          onComplete={handleComplete}
          isFirstStep={currentStep === 0}
          isLastStep={currentStep === steps.length - 1}
          nextLabel="Continue"
          prevLabel="Back"
        />
      </StepperProvider>
    </div>
  );
};

export default ExampleComponent;
