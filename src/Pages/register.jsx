import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layout/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm text-center mt-4">
        Already have an account? {""}
        <a className="font-bold" href="/login ">
          Sign in
        </a>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
