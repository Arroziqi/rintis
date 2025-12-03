import styled from 'styled-components';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { StyledPrimaryButton } from '@/components/button/primary/PrimaryButton.styled';

export const StyledSecondaryButton = styled(StyledPrimaryButton)`
  background-color: #fff;
  border: 1px solid ${lightPalette.border.purpleGlow};
  color: ${lightPalette.primary.main};
`;
