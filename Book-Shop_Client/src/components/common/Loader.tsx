import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <ScaleLoader height={30} width={5} color="black" />
    </div>
  );
};

export default Loader;
