import styled from 'styled-components';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { StyledPrimaryButton } from '@/components/button/primary/PrimaryButton.styled';

export const StyledSecondaryButton = styled(StyledPrimaryButton)`
  background-color: #fff;
  border: 1px solid ${lightPalette.border.purpleGlow};
  color: ${lightPalette.primary.main};
  height: 35px;
  padding: 5px 20px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
