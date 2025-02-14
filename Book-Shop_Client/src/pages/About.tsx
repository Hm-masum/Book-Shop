import Cover from "../components/common/Cover";
import img1 from "../assets/cart1.jpg";
import ChooseUs from "../components/About/ChooseUs";

const About = () => {
  return (
    <div>
      <Cover title={"About us"} subTitle={"Explore you about us!"} img={img1} />
      <ChooseUs />
    </div>
  );
};

export default About;
