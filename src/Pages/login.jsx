import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../features/authSlice";

const LoginPage = () => {
  const dispacth = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispacth(LoginUser({ username, password }));
  };

  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm text-center mt-4">
        Don't have an account? {""}
        <a className="font-bold" href="/register ">
          Sign Up
        </a>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
