import TextInput from "../Elements/Text";

const FormPredict = (props) => {
  const { onSubmit, value } = props;
  return (
    <form action="" onSubmit={onSubmit} onChange={onChange}>
      <TextInput
        label="text"
        type="text"
        placeholder="Put your text here"
        name="text"
        value={value}
      />
    </form>
  );
};

export default FormPredict;
