import useMediaQuery from '../shared/hooks/UseMediaQuery';

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  const isFullScreen = useMediaQuery('(max-width: 450px)');
  return (
    <button
      className={`${
        isFullScreen && text === 'Dismiss message' && 'absolute w-5/6 bottom-5'
      } hover:bg-gradient-to-tr hover:from-pink hover:to-orange transition-colors duration-200 ease-in-out bg-darkSlateGray rounded-lg my-5 p-4 text-white font-semibold md:text-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
