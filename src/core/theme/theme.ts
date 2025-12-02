// src/core/theme/theme.ts

import { darkPalette, lightPalette } from './styleGuide/color';
import { typography } from './styleGuide/typography';
import { border } from './styleGuide/border';
import { boxShadow } from './styleGuide/boxShadow';
import { layout } from './styleGuide/layout';
import { motion } from './styleGuide/motion';

export const getTheme = (mode: 'light' | 'dark') => ({
  mode,
  palette: mode === 'light' ? lightPalette : darkPalette,
  border,
  boxShadow,
  typography,
  layout,
  motion,
});
