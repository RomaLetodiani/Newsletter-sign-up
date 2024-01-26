import Input from '../UI/Input';
import { useInput } from '../shared/hooks/UseInput';
import desktopImg from '../../assets/images/illustration-sign-up-desktop.svg';
import mobileImg from '../../assets/images/illustration-sign-up-mobile.svg';
import useMediaQuery from '../shared/hooks/UseMediaQuery';
import { textObj } from '../shared/consts';
import { ListIcon } from '../shared/icons';
import Button from '../UI/Button';

const SignUp = ({
  email,
  setView,
  setEmail,
}: {
  setView: () => void;
  email: string | null;
  setEmail: (email: string | null) => void;
}) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 768px)');
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
  const { signUp } = textObj;
  const onClick = () => {
    !emailHasError && email && setView();
  };
  return (
    <div className="flex md:flex-row md:justify-center md:items-center flex-col-reverse">
      <div className="flex-1 flex flex-col max-w-lg justify-center px-10 py-6 md:mr-5 md:p-[clamp(1rem,3vw,3rem)]">
        <h1 className="text-4xl lg:text-6xl font-bold text-darkSlateGray">
          {signUp.title}
        </h1>
        <p className="text-charcoalGrey font-semibold lg:text-lg mt-7 mb-2">
          {signUp.desc}
        </p>
        <div>
          {signUp.list.map((item) => (
            <div key={item} className="flex text-lg items-center my-3 gap-5">
              <span>
                <ListIcon />
              </span>
              <p className="text-charcoalGrey text-sm lg:text-base font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
        <Input
          label={signUp.input.title}
          placeholder={signUp.input.placeholder}
          value={emailValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          onBlur={emailOnBlur}
          id="email"
          error={emailHasError}
          errorMessage={signUp.input.error}
        />
        <Button text={signUp.button} onClick={onClick} />
      </div>
      <div className="flex-1">
        <img
          className="w-full"
          src={isAboveMediumScreens ? desktopImg : mobileImg}
          alt="signUp"
        />
      </div>
    </div>
  );
};

export default SignUp;
