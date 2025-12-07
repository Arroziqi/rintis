export interface KelolaStepType {
  id: number;
  title: string;
  description?: string;
  type?: 'input' | 'none';
  field?: 'cash' | 'omzet';
  placeholder?: string;
  inputType?: 'string' | 'number';
}

export interface IKelolaForm {
  cash: string;
  omzet: string;
}
