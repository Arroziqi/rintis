import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Url } from 'url';

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: Url;
}
