import { useState } from 'react';
import SignUp from '../views/SignUp';
import Success from '../views/Success';

const Card = () => {
  const [view, setView] = useState('signup');
  const [email, setEmail] = useState<string | null>(null);

  const onClick = () => {
    setView((prev) => (prev === 'signup' ? 'success' : 'signup'));
  };
  return (
    <div className="bg-white p-5 rounded-lg">
      {view === 'signup' ? (
        <SignUp email={email} setEmail={setEmail} setView={onClick} />
      ) : (
        <Success email={email} setView={onClick} />
      )}
    </div>
  );
};

export default Card;
