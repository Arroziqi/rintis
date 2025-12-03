import styled from 'styled-components';
import Link from 'next/link';
import { lightPalette } from '@/core/theme/styleGuide/color';

export const StyledPrimaryButton = styled(Link)`
  background-color: ${lightPalette.primary.main};
  border-radius: 100px;
  padding: 5px 20px 5px 20px;
  font-size: 8px;
  font-weight: bold;
  color: #fff;
  line-height: 12px;
  display: block;
`;
