import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: `/orders/create-order`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
    allOrders: builder.query({
      query: () => ({
        url: `/orders/all-order`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    myOrders: builder.query({
      query: () => ({
        url: `/orders/user-order`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    verifyOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/verify?order_id=${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useAllOrdersQuery,
  useMyOrdersQuery,
  useVerifyOrderMutation,
} = orderApi;
