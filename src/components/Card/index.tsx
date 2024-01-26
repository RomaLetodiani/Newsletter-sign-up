import { useState } from 'react';
import SignUp from '../views/SignUp';
import Success from '../views/Success';

const Card = () => {
  const [view, setView] = useState('signup');
  const [email, setEmail] = useState<string | null>(null);

  const onClick = () => {
    setEmail(null);
    setView((prev) => (prev === 'signup' ? 'success' : 'signup'));
  };
  return (
    <div
      className={`bg-white ${
        view === 'success' ? 'flex justify-center items-center' : ''
      } drop-shadow-2xl min-h-screen min-[450px]:min-h-0 min-w-full min-[450px]:min-w-0 md:p-5 overflow-hidden min-[450px]:rounded-3xl`}
    >
      {view === 'signup' ? (
        <SignUp email={email} setEmail={setEmail} setView={onClick} />
      ) : (
        <Success email={email} setView={onClick} />
      )}
    </div>
  );
};

export default Card;
