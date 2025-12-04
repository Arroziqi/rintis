'use client';

import useStepper from '@/components/stepper/hooks/useStepper';
import StepperIndicatorBullet from '@/components/stepper/indicators/StepperIndicatorBullet';
import Stepper from '@/components/stepper/Stepper';
import { MulaiData } from '@/app/(landing-page)/mulai/data/Mulai.data';
import MulaiContent from '@/app/(landing-page)/mulai/components/MulaiContent';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';

export default function App() {
  const { currentStep, next, goToStep } = useStepper({
    totalSteps: MulaiData.length,
  });

  const handleClick = () => {
    alert('Fungsi belum diimplementasi 🚧');
    return;
  };

  const stepContents = MulaiData.map((data, index) => (
    <MulaiContent
      key={data.id}
      props={data}
      onNext={next}
      isLastStep={index === MulaiData.length - 1}
      handleClickLastStep={handleClick}
    />
  ));

  return (
    <StyledFlex direction={'column'}>
      <Stepper currentStep={currentStep}>{stepContents}</Stepper>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-1/5">
        <StepperIndicatorBullet
          totalSteps={MulaiData.length}
          currentStep={currentStep}
          onStepClick={goToStep}
        />
      </div>
    </StyledFlex>
  );
}
