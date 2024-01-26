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
    <div className="w-full mt-5">
      <div className="flex justify-between w-full">
        <label
          className="text-darkSlateGray font-bold text-sm"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        {props.error && (
          <p className="text-tomato text-sm font-bold">{props.errorMessage}</p>
        )}
      </div>
      <input
        placeholder={props.placeholder}
        className={`w-full outline-none mt-2 border  rounded-lg px-5 py-4 text-darkSlateGray ${
          props.error
            ? 'border-tomato bg-tomatoLight text-tomato placeholder:text-tomato'
            : 'border-grey'
        }`}
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
