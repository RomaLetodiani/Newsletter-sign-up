const Success = ({
  setView,
  email,
}: {
  setView: () => void;
  email: string | null;
}) => {
  return (
    <div>
      {email}
      <br />
      <button onClick={setView}>suc</button>
    </div>
  );
};

export default Success;
