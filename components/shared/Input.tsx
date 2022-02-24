import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import hash from '@utils/hash';

const StyledInput = styled.input``;

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const Label = styled.label`
  font-size: 14px;
  color: rgb(47, 56, 65);
  font-weight: 600;
  vertical-align: middle;
`;

const FormControl = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4px;
`;

export const InputStyled = styled.input`
  appearance: none;
  border: 2px solid #d0d4d7;
  border-radius: 4px;
  padding: 16px;
  font-size: 18px;
  min-width: 0;

  &:hover {
    border-color: #000;
  }

  &:focus {
    border-color: #000;
    box-shadow: 0 0 1px 3px #0005;
    outline: none;
  }
`;

const Input: FC<Props> = (props) => {
  const { label, value, onChange, ...rest } = props;

  return (
    <FormControl>
      <Label htmlFor={hash(label)}>{label}</Label>
      <InputStyled
        id={hash(label)}
        {...rest}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </FormControl>
  );
};

export default Input;
