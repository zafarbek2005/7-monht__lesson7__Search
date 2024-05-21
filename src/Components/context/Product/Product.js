import { api } from '../Api/Api';

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get search products request
    getSearchProducts: build.query({
      query: (params) => ({
        url: '/products/search',
        params
      }),
      providesTags: ["Product"]
    }),
    // Get all products request
    getProducts: build.query({
      query: (params) => ({
        url: '/products',
        params
      }),
      providesTags: ["Product"]
    })
  })
});

export const {
  useGetSearchProductsQuery,
  useGetProductsQuery
} = productApi;
