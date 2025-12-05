'use client';

import useStepper from '@/components/stepper/hooks/useStepper';
import StepperIndicatorBullet from '@/components/stepper/indicators/StepperIndicatorBullet';
import Stepper from '@/components/stepper/Stepper';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { KelolaData } from '@/app/(main)/(landing-page)/kelola/data/Kelola.data';
import KelolaContent from '@/app/(main)/(landing-page)/kelola/components/KelolaContent';

export default function KelolaPage() {
  const { currentStep, next, goToStep } = useStepper({
    totalSteps: KelolaData.length,
  });

  const handleClick = () => {
    alert('Fungsi belum diimplementasi 🚧');
    return;
  };

  const stepContents = KelolaData.map((data, index) => (
    <KelolaContent
      key={data.id}
      onNext={next}
      isLastStep={index === KelolaData.length - 1}
      handleClickLastStep={handleClick}
      {...data}
    />
  ));

  return (
    <StyledFlex width={'100%'} direction={'column'}>
      <Stepper currentStep={currentStep}>{stepContents}</Stepper>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-1/5">
        <StepperIndicatorBullet
          totalSteps={KelolaData.length}
          currentStep={currentStep}
          onStepClick={goToStep}
        />
      </div>
    </StyledFlex>
  );
}
