import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useState } from "react";
import { axiosInstance } from "../../lib/axios";

const FormLogin = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/login", {
        username: input.username,
        password: input.password,
      });

      setResponseMessage(response);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Username"
        name="username"
        value={input.username}
        onChange={handleInputChange}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
        value={input.password}
        onChange={handleInputChange}
      />
      <Button className="bg-blue-600 w-full">Login</Button>
      {responseMessage && <p>{responseMessage}</p>}{" "}
      {/* Tampilkan pesan respons */}
    </form>
  );
};

export default FormLogin;
