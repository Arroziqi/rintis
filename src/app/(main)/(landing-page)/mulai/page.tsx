'use client';

import useStepper from '@/components/stepper/hooks/useStepper';
import StepperIndicatorBullet from '@/components/stepper/indicators/StepperIndicatorBullet';
import Stepper from '@/components/stepper/Stepper';
import { MulaiData } from '@/app/(main)/(landing-page)/mulai/data/Mulai.data';
import MulaiContent from '@/app/(main)/(landing-page)/mulai/components/MulaiContent';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { useRouter } from 'next/navigation';

export default function MulaiPage() {
  const router = useRouter();

  const { currentStep, next, goToStep } = useStepper({
    totalSteps: MulaiData.length,
  });

  const handleClick = () => {
    router.push('/hasil');
  };

  const stepContents = MulaiData.map((data, index) => (
    <MulaiContent
      key={data.id}
      onNext={next}
      isLastStep={index === MulaiData.length - 1}
      handleClickLastStep={handleClick}
      {...data}
    />
  ));

  return (
    <StyledFlex width={'100%'} direction={'column'}>
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
