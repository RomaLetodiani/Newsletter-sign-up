import Input from '../UI/Input';
import { useInput } from '../shared/hooks/UseInput';

const SignUp = ({
  setView,
  setEmail,
}: {
  setView: () => void;
  email: string | null;
  setEmail: (email: string | null) => void;
}) => {
  const {
    value: emailValue,
    hasError: emailHasError,
    onChange: emailOnChange,
    onBlur: emailOnBlur,
  } = useInput(
    (value) => value.includes('@') && value.includes('.') && value.length > 4
  );
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailOnChange(e);
    setEmail(e.target.value);
  };
  const onClick = () => {
    !emailHasError && setView();
  };
  return (
    <div>
      <Input
        label="Email address"
        placeholder="email@gmail.com"
        value={emailValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        onBlur={emailOnBlur}
        id="email"
        error={emailHasError}
        errorMessage="valid email required"
      />
      <button onClick={onClick}>hey</button>
    </div>
  );
};

export default SignUp;
