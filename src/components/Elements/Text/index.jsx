const TextInput = (props) => {
  const { type, placeholder, value, onChange, name } = props;
  return (
    <div>
      <textarea
        type={type}
        className="text-md border border-gray-500 rounded h-[50vh] w-full py-2 px-3 placeholder: mb-4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default TextInput;
