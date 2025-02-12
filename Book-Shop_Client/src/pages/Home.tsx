import FeaturesProducts from "../components/home/FeaturesProducts";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Slider />
      <FeaturesProducts />
    </div>
  );
};

export default Home;
