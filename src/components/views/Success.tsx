import Button from '../UI/Button';
import { textObj } from '../shared/consts';
import { SuccessIcon } from '../shared/icons';

const Success = ({
  setView,
  email,
}: {
  setView: () => void;
  email: string | null;
}) => {
  const { success } = textObj;
  return (
    <div className="flex flex-col justify-center h-full max-w-md p-8">
      <SuccessIcon />
      <h1 className="text-4xl min-[450px]:text-5xl my-7 font-bold text-darkSlateGray ">
        {success.title}
      </h1>
      <p className="text-darkSlateGray">
        {success.desc1} <span className="font-bold">{email}</span>{' '}
        {success.desc2}
      </p>
      <Button text={success.button} onClick={setView} />
    </div>
  );
};

export default Success;
