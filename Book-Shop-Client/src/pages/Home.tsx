import AccordionComp from "../components/home/Accordion";
import Category from "../components/home/Category";
import FeaturesProducts from "../components/home/FeaturesProducts";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Slider />
      <FeaturesProducts />
      <Category />
      <AccordionComp />
    </div>
  );
};

export default Home;
