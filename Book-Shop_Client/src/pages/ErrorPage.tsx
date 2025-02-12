import { Link } from "react-router-dom";
import error from "../assets/Error.png";
import ButtonSm from "../components/common/ButtonSm";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <img
        className="w-[80%] md:w-[40%] h-[40%] md:h-[50%] "
        src={error}
        alt=""
      />

      <Link to={"/"} className="flex items-center justify-center mt-8">
        <ButtonSm text="Go To Home" />
      </Link>
    </div>
  );
};

export default ErrorPage;
