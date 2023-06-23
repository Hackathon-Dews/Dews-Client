import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/summarize-text");
      console.log(user);
    }
  }, [user, isSuccess, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ username, password }));
  };

  useEffect(() => {
    if (isError) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
      });
    }
    if (isSuccess) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Berhasil Login",
      });
    }
  }, [isError, isSuccess, message]);

  useEffect(() => {
    dispatch(reset());
  }, [user, isSuccess, dispatch]);

  return (
    <div className="container">
      <form onSubmit={Auth}>
        <InputForm
          label="Username"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="******"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="bg-blue-600 w-full">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
