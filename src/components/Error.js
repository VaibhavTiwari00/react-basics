import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <Header />
      <h1>You Open This Page By mistake</h1>
      <h2>
        <b>{error.status + " "}</b>
        {error.statusText}
      </h2>
    </>
  );
};
export default Error;
