import { useState } from 'react';

export const useInput = (validate: (value: string) => boolean) => {
  const [value, setValue] = useState<string>('');
  const [touched, setTouched] = useState(false);

  const isValid = validate(value);
  const hasError = !isValid && touched;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setTouched(true);
  };

  return {
    value,
    onChange,
    onBlur,
    hasError,
  };
};
