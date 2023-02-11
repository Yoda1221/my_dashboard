import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = import.meta.env.VITE_SERVER_URL

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    reducerPath: "adminApi",
    tagTypes: [
        "User",
        "Products",
        "Customers"
    ],
    endpoints: (build) => ({
        getUser: build.query({
          query: (id) => `getuser/${id}`,
          providesTags: ["User"]
        }),
        getProducts: build.query({
          query: () => "/getproducts",
          providesTags: ["Products"],
        }),
        getCustomers: build.query({
          query: () => "/getcustomers",
          providesTags: ["Customers"]
        }),

    })

})

export const {
    useGetUserQuery,
    useGetProductsQuery,
    useGetCustomersQuery
} = api
