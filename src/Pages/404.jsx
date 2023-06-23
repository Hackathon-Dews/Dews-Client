import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold "> Oops!</h1>
      <p className="my-5">Sorry, an unexpected error has occured</p>
      <p className="text-xl">{error.statusText || error.messsage}</p>
    </div>
  );
};

export default ErrorPage;
