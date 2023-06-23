import logo from "../../assets/DEWS.svg";

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs rounded-lg">
        <a href="/detection-fake-news">
          <img src={logo} alt="" />
        </a>
        <h1 className="text-3xl font-bold mt-5 mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please login to your account.
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
