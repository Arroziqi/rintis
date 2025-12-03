import { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export interface PrimaryButtonProps extends LinkProps {
  children: ReactNode;
}
