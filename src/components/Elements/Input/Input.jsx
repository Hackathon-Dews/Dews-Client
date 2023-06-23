const Input = (props) => {
  const { type, placeholder, value, onChange, name } = props;
  return (
    <div>
      <input
        type={type}
        className="text-md border rounded w-full py-2 px-3 text-slate-950 opacity-50 placeholder:"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
