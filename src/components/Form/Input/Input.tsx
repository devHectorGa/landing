import { InputContainer, Input as StyledInput, InputLabel } from './Input.styles';
import { SellRouteType } from '../../../routes/routes.types';
type InputTypes = { label?: string } & Partial<SellRouteType>;

export const Input = ({ label }: InputTypes) => {
  return (
    <InputContainer>
      <StyledInput />
      {label && <InputLabel>{label}</InputLabel>}
    </InputContainer>
  );
};
