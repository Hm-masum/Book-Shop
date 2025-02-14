import Cover from "../components/common/Cover";
import img1 from "../assets/cart1.jpg";
import SendMessage from "../components/Contact/SendMessage";

const Contact = () => {
  return (
    <div>
      <Cover
        title={"Contact us"}
        subTitle={"If you want to know. Contact us!"}
        img={img1}
      />
      <SendMessage />
    </div>
  );
};

export default Contact;
