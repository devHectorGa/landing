import { cloneElement, isValidElement } from 'react';
import { StepType } from './Stepper.types';

export const Step = ({
  children,
  name,
  prevStep,
  nextStep,
  data,
  updateData,
  isActive,
  render,
  setError,
  isError,
}: StepType): JSX.Element | null => {
  if (!isActive) return null;

  return render
    ? cloneElement<StepType>(render, {
        name,
        prevStep,
        nextStep,
        data,
        updateData,
        isActive,
        render,
        setError,
        isError,
      })
    : cloneElement<StepType>(children as React.ReactElement<StepType>, {
        name,
        prevStep,
        nextStep,
        data,
        updateData,
        isActive,
        render,
        setError,
        isError,
      });
};
