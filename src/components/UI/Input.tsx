type Props = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  id: string;
  errorMessage: string;
  error: boolean;
};

const Input = (props: Props) => {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <label htmlFor={props.id}>{props.label}</label>
        {props.error && <p className="text-tomato">{props.errorMessage}</p>}
      </div>
      <input
        placeholder={props.placeholder}
        className={`w-full border-b border-black`}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        type="text"
        id={props.id}
      />
    </div>
  );
};

export default Input;
