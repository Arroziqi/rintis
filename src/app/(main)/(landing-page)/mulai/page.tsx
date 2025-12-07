'use client';

import { useRouter } from 'next/navigation';
import useStepper from '@/components/stepper/hooks/useStepper';
import Stepper from '@/components/stepper/Stepper';
import StepperIndicatorBullet from '@/components/stepper/indicators/StepperIndicatorBullet';
import MulaiContent from './components/MulaiContent';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { useBusinessRecommendation } from '@/app/(main)/(landing-page)/context/BusinessRecommendation.context';
import { MulaiData } from '@/app/(main)/(landing-page)/mulai/data/Mulai.data';
import { IGetBusinessRecommendationPayload } from '@/lib/feature/businessRecommendation/presentation/schema/GetBusinessRecommendation.schema';

export default function MulaiPage() {
  const router = useRouter();
  const { onSubmit, form } = useBusinessRecommendation();
  const { currentStep, next, goToStep } = useStepper({
    totalSteps: MulaiData.length,
  });

  const handleLastStep = async () => {
    const payload: IGetBusinessRecommendationPayload = form.getValues();
    await onSubmit(payload);
    router.push('/hasil');
  };

  const stepContents = MulaiData.map((data, index) => (
    <MulaiContent
      key={data.id}
      {...data}
      onNext={next}
      isLastStep={index === MulaiData.length - 1}
      handleClickLastStep={handleLastStep}
    />
  ));

  return (
    <StyledFlex width="100%" direction="column">
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
