import { TParamsReq } from "../../../type/global.type";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TParamsReq) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: `/products`,
          method: "GET",
          params: params,
        };
      },
    }),
    getSingleProducts: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (bookData) => ({
        url: `/products`,
        method: "POST",
        body: bookData,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, bookData }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: bookData,
      }),
    }),
    DeleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
