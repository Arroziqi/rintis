import React, { useEffect, useState } from 'react';
import { SuggestionItemDetail } from '@/app/(main)/(landing-page)/hasil/type/Hasil.type';
import { Modal, ModalProps } from '@/components/modal/Modal';
import useStepper from '@/components/stepper/hooks/useStepper';
import Stepper from '@/components/stepper/Stepper';
import CategoryPillStepperIndicator from '@/components/stepper/indicators/PillStepperIndicatorCategory';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import Typography from '@/components/Typography';
import { StyledButton } from '@/components/button/primary/PrimaryButton.styled';

interface DetailModalProps extends ModalProps {
  data: SuggestionItemDetail[];
}

function DetailModal({ data, ...props }: Readonly<DetailModalProps>) {
  const [stepperKey, setStepperKey] = useState(0);
  const { currentStep, goToStep, reset } = useStepper({
    totalSteps: data.length,
    initialStep: 0,
  });

  // Reset stepper ketika modal dibuka
  useEffect(() => {
    if (props.isOpen) {
      reset();
      setStepperKey((prev) => prev + 1);
    }
  }, [props.isOpen, reset]);

  // Extract categories dari data
  const categories = data.map((item) => item.category);

  const handleStepClick = (step: number) => {
    console.log('Step clicked:', step, 'Category:', data[step]?.category);
    goToStep(step);
  };

  const stepContents = data.map((item, index) => (
    <StyledFlex
      key={`${item.category}-${index}`}
      className="p-6 pb-0 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
      direction={'column'}
      gap={'15px'}
    >
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>Omzet Harian</Typography>
        <Typography variant={'pixie'}>{item.dailyTurnover}</Typography>
      </StyledFlex>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>HPP/Modal</Typography>
        <Typography variant={'pixie'}>{item.hpp}</Typography>
      </StyledFlex>
      <StyledFlex justify={'space-between'}>
        <Typography variant={'pixie'}>Profit</Typography>
        <Typography variant={'pixie'}>{item.profit}</Typography>
      </StyledFlex>

      {item.note && <Typography variant={'pixie'}>⚠️ {item.note}</Typography>}

      <StyledButton
        className={'mt-5 w-fit self-center'}
        style={{ border: '1px solid #C4C4C4' }}
      >
        Pilih Bisnis
      </StyledButton>
    </StyledFlex>
  ));

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} header={props.header}>
      {/* Stepper Indicator dengan Category */}
      <div className="mt-6 flex justify-center">
        <CategoryPillStepperIndicator
          key={`category-indicator-${stepperKey}`}
          currentStep={currentStep}
          categories={categories}
          onStepClick={handleStepClick}
        />
      </div>

      {/* Stepper Content */}
      <Stepper key={stepperKey} currentStep={currentStep}>
        {stepContents}
      </Stepper>
    </Modal>
  );
}

// Tambahkan CSS untuk animasi
const styles = `
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fade-in 0.5s ease-out forwards;
  }
`;

// Tambahkan style ke document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default DetailModal;
