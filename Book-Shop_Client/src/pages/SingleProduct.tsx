import { useParams } from "react-router-dom";
import img from "../assets/banner1.jpg";
import { useGetSingleProductsQuery } from "../redux/features/product/products.api";
import ButtonSm from "../components/common/ButtonSm";
import Loader from "../components/common/Loader";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: singleProduct, isLoading } = useGetSingleProductsQuery(id);

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img className="w-full h-full bg-cover rounded-xl" src={img} alt="" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col space-y-2">
        <h2 className="text-4xl font-title font-bold">
          {singleProduct?.data?.title}
        </h2>
        <p className="text-xl font-title font-semibold">
          By : {singleProduct?.data?.author}
        </p>
        <p className="font-title font-semibold">
          category : {singleProduct?.data?.category}
        </p>
        <p className="border w-full border-gray-200"></p>
        <p className="font-title font-semibold ">
          About : {singleProduct?.data?.description}
        </p>
        <p className="border w-full border-gray-200"></p>
        <p className="font-title font-semibold">
          Publication : {singleProduct?.data?.publication || "Guardian"}
        </p>
        <p className="font-title font-semibold">
          Publish Year : {singleProduct?.data?.publishYear || 2010}
        </p>
        <p className="border w-full border-gray-200"></p>
        <p className="font-title font-semibold">
          Quantity : {singleProduct?.data?.quantity}
        </p>
        <p className="font-title font-semibold">
          Price : {singleProduct?.data?.price}
        </p>
        <div className="font-title">
          {singleProduct?.data?.inStock === true ? (
            <button className="rounded-lg p-2 px-4 bg-blue-100 text-blue-500 ">
              In stock
            </button>
          ) : (
            <button className="rounded-lg p-2 px-4 bg-red-100 text-red-500 ">
              Out of stock
            </button>
          )}
        </div>
        <div className="flex items-center pt-4 gap-4">
          <ButtonSm variant="outline" text={"add to cart"} size="sm"></ButtonSm>
          <ButtonSm text={"Buy Now"}></ButtonSm>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
