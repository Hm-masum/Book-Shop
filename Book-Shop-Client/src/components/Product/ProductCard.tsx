import { TProduct } from "../../type/product.type";
import { HiHeart } from "react-icons/hi";
import "../../App.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/product/productSlice";

const ProductCard = ({ product }: TProduct) => {
  const dispatch = useAppDispatch();
  const { _id, title, author, price, inStock, category, image } = product;

  const handleAddToCard = () => {
    const productData = {
      _id: product._id,
      title: product.title,
      author: product.author,
      price: product.price,
      quantity: 1,
      stock: product.quantity,
      image: product.image as string,
    };

    if (product.quantity > 0) {
      dispatch(addToCart(productData));
      Swal.fire({
        title: "Success!",
        text: "Product added card!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Sorry?",
        text: "Product is out of stock!",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <Link to={`/products/${_id}`}>
      <div className="space-y-4 bg-white rounded-md shadow-md hover:shadow-lg p-5">
        <div className="relative">
          <img src={image} className="mx-auto h-[350px] md:h-[250px]" alt="" />
          <div
            onClick={handleAddToCard}
            className="rounded-full p-2 absolute bg-slate-100 top-3 right-2 primary-color flex items-center justify-center"
          >
            <HiHeart className="text-2xl font-semibold text-blue-600" />
          </div>

          <div className="absolute bottom-7 left-0">
            {inStock == true ? (
              <p className="rounded-r-full  p-2 px-4 bg-blue-100 text-blue-500 flex items-center justify-center">
                In Stock
              </p>
            ) : (
              <p className="rounded-r-full p-2 px-4 bg-red-100 text-red-500 flex items-center justify-center">
                Out of Stock
              </p>
            )}
          </div>
        </div>

        <div className="px-4 space-y-1">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600">Author : {author}</p>
          <div className=" flex items-center justify-between">
            <p className="text-lg font-semibold">Price : {price} tk </p>
            <p className="text-sm text-gray-600 font-title"> {category} </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
