import React from 'react';
import { PrimaryButtonProps } from '@/components/button/primary/PrimaryButton.type';
import { StyledSecondaryButton } from '@/components/button/secondary/SecondaryButton.styled';

function SecondaryButton({
  children,
  href,
  ...props
}: Readonly<PrimaryButtonProps>) {
  return (
    <StyledSecondaryButton href={href} {...props}>
      {children}
    </StyledSecondaryButton>
  );
}

export default SecondaryButton;
