import React from 'react';
import { PrimaryButtonProps } from '@/components/button/primary/PrimaryButton.type';
import { StyledPrimaryButton } from '@/components/button/primary/PrimaryButton.styled';

function PrimaryButton({
  children,
  href,
  ...props
}: Readonly<PrimaryButtonProps>) {
  return (
    <StyledPrimaryButton href={href} {...props}>
      {children}
    </StyledPrimaryButton>
  );
}

export default PrimaryButton;
