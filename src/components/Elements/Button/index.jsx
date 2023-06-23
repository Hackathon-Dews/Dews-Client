const Button = (props) => {
  const { children, variant = "bg-black", width = "w-full" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white ${width}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
