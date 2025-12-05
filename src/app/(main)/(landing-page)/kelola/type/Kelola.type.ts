import React from 'react';

export interface KelolaStepType {
  id: number;
  title: string;
  description?: string;
  content?: React.ReactNode;
}
