import React from 'react';
import { MulaiStepType } from '@/app/(main)/(landing-page)/mulai/type/Mulai.type';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { IoIosSearch } from 'react-icons/io';
import { FaArrowUpLong } from 'react-icons/fa6';

interface MulaiContentProps extends Readonly<MulaiStepType> {
  onNext: () => void;
  isLastStep: boolean;
  handleClickLastStep(): void;
}

function MulaiContent({
  onNext,
  isLastStep,
  handleClickLastStep,
  ...props
}: Readonly<MulaiContentProps>) {
  const handleClick = () => {
    if (isLastStep) {
      handleClickLastStep();
    }
    onNext();
  };

  return (
    <StyledFlex width={'100%'} gap={10} direction={'column'} align={'start'}>
      <Typography
        className={'text-start'}
        variant={'h5'}
        color={lightPalette.primary.main}
      >
        {props.title}
      </Typography>

      <Typography variant={'caption'} weight={'regular'}>
        {props.description}
      </Typography>

      <StyledFlex gap={10} align={'center'} className="w-full pb-[120px]">
        <div className="w-[90%]">{props.content}</div>
        {isLastStep ? (
          <IoIosSearch
            className={'cursor-pointer'}
            size={24}
            color={lightPalette.primary.main}
            onClick={handleClick}
          />
        ) : (
          <FaArrowUpLong
            size={24}
            color={lightPalette.primary.main}
            className="rotate-90 cursor-pointer"
            onClick={handleClick}
          />
        )}
      </StyledFlex>
    </StyledFlex>
  );
}

export default MulaiContent;
