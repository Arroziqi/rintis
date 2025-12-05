import React from 'react';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { IoIosSearch } from 'react-icons/io';
import { FaArrowUpLong } from 'react-icons/fa6';
import { KelolaStepType } from '@/app/(main)/(landing-page)/kelola/type/Kelola.type';

interface KelolaContentProps extends Readonly<KelolaStepType> {
  onNext: () => void;
  isLastStep: boolean;
  handleClickLastStep(): void;
}

function KelolaContent({
  onNext,
  isLastStep,
  handleClickLastStep,
  ...props
}: Readonly<KelolaContentProps>) {
  const handleClick = () => {
    if (isLastStep) {
      handleClickLastStep();
    }
    onNext();
  };

  return (
    <StyledFlex width={'100%'} gap={10} direction={'column'} align={'start'}>
      <StyledFlex align={'center'} gap={20}>
        <Typography
          className={'text-start'}
          variant={'h5'}
          color={lightPalette.primary.main}
        >
          {props.title}
        </Typography>

        {isLastStep && !props.description && !props.content && (
          <FaArrowUpLong
            size={24}
            color={lightPalette.primary.main}
            className="rotate-90 cursor-pointer"
            onClick={handleClick}
          />
        )}
      </StyledFlex>

      {props.description && (
        <Typography variant={'caption'} weight={'regular'}>
          {props.description}
        </Typography>
      )}

      {props.content && (
        <StyledFlex gap={10} align={'center'} className="w-full pb-[120px]">
          {props.content}
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
      )}
    </StyledFlex>
  );
}

export default KelolaContent;
