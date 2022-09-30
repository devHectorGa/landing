import { ReactElement } from 'react';

export type StepType<T = void, U = void> = {
  prevStep?: (step?: number) => void;
  nextStep?: (step?: number) => void;
  updateData?: (key: U, data: Partial<T>) => void;
  data?: T;
  isActive?: boolean;
  name?: string;
  render?: JSX.Element;
  children?: ReactElement<StepType<T, U>>;
  setError?: (error?: boolean) => void;
  isError?: boolean;
};
