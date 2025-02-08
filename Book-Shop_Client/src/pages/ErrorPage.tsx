import { Link } from "react-router-dom";
import error from "../assets/Error.png";
import { Button } from "../components/ui/button";

const ErrorPage = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <img
        className="w-[80%] md:w-[40%] h-[40%] md:h-[50%] "
        src={error}
        alt=""
      />

      <Link to={"/"} className="flex items-center justify-center mt-8">
        <Button className="bg-purple-800  font-semibold py-6">
          Go To Home
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
