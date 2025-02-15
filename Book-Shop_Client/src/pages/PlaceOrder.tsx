import { useEffect } from "react";
import { useCreateOrderMutation } from "../redux/features/order/order.api";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { toast } from "sonner";

const PlaceOrder = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.product);
  const [createOrder, { isLoading, isSuccess, data, isError, error }] =
    useCreateOrderMutation();

  const handlePlaceOrder = async () => {
    await createOrder({ products: items });
  };

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        dispatch(afterOrder());
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [
    data?.data,
    data?.message,
    error,
    isError,
    isLoading,
    isSuccess,
    dispatch,
  ]);

  return (
    <div>
      <button onClick={handlePlaceOrder}></button>
    </div>
  );
};

export default PlaceOrder;
