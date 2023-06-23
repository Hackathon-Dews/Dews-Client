import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layout/AuthLayout";

const LoginPage = () => {
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
