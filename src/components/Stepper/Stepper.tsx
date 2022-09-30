import { Children, cloneElement, isValidElement, ReactNode, useState } from 'react';

export const Wizard = ({
  children,
  stepIndex = 0,
  defaultData = {},
}: {
  children: ReactNode[];
  stepIndex?: number;
  defaultData?: Record<string, unknown>;
}): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(stepIndex);
  const [data, updateData] = useState(defaultData);
  const [isError, setIsError] = useState(false);

  const prevStep = (step?: number) => {
    const prev = currentStep > 0 && currentStep > stepIndex ? currentStep - 1 : currentStep;
    step !== undefined && step >= 0 && step < children?.length ? setCurrentStep(step) : setCurrentStep(prev);
  };

  const nextStep = (step?: number) => {
    step && step > 0 && step < children.length
      ? setCurrentStep(step)
      : setCurrentStep(currentStep < children.length ? currentStep + 1 : currentStep);
  };

  const saveData = (stepKey: string, val: unknown) => {
    updateData(data ? { ...data, [`${stepKey}`]: val } : { [`${stepKey}`]: val });
  };

  const setError = (error: boolean) => {
    setIsError(error);
  };

  return (
    <>
      {Children.map(
        children,
        (child, index) =>
          isValidElement(child) &&
          cloneElement(child as React.ReactElement, {
            isActive: index === currentStep,
            data,
            updateData: (stepKey: string, value: unknown) => saveData(stepKey, value),
            prevStep: (step?: number) => prevStep(step),
            nextStep: (step?: number) => nextStep(step),
            setError: (error?: boolean) => setError(Boolean(error)),
            isError,
          })
      )}
    </>
  );
};
