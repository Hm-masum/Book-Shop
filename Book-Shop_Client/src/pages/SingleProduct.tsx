import { useParams } from "react-router-dom";
import img from "../assets/banner1.jpg";
import { useGetSingleProductsQuery } from "../redux/features/product/products.api";
import ButtonSm from "../components/common/ButtonSm";
import ButtonBig from "../components/common/ButtonBig";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: singleProduct, isLoading } = useGetSingleProductsQuery(id);
  const {
    title,
    author,
    price,
    publication,
    category,
    description,
    quantity,
    inStock,
    publishYear,
  } = singleProduct?.data || undefined;

  if (isLoading) {
    console.log("...");
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img className="w-full h-full bg-cover rounded-xl" src={img} alt="" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-2">
        <h2 className="text-4xl font-title font-bold">{title}</h2>
        <p className="text-xl font-title font-semibold">By : {author}</p>
        <p className="font-title font-semibold">category : {category}</p>
        <p className="border w-full border-gray-500"></p>
        <p className="font-title font-semibold ">About : {description}</p>
        <p className="border w-full border-gray-500"></p>
        <p className="font-title font-semibold">
          Publication : {publication || "Guardian"}
        </p>
        <p className="font-title font-semibold">
          Publish Year : {publishYear || 2010}
        </p>
        <p className="border w-full border-gray-500"></p>
        <p className="font-title font-semibold">Quantity : {quantity}</p>
        <p className="font-title font-semibold">Price : {price}</p>
        <div className="font-title">
          {inStock === true ? (
            <button className="rounded-lg p-2 px-4 bg-blue-100 text-blue-500 ">
              In stock
            </button>
          ) : (
            <button className="rounded-lg p-2 px-4 bg-red-100 text-red-500 ">
              Out of stock
            </button>
          )}
        </div>
        <div className="flex items-center gap-4">
          <ButtonSm text={"add to cart"}></ButtonSm>
          <ButtonBig text={"Buy Now"}></ButtonBig>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
