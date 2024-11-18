
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from '../interfaces/getPropertyById'
import { ApiPropertyListResponse } from '../interfaces/getPropertyList';

export const propertiesApi = createApi({
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://laara-api-dev-3rc4fb3npa-ew.a.run.app',//import.meta.env.BASE_URL,
    prepareHeaders: (headers) => {
        headers.set('x-app-id', '3a2f3e5b-4a89-4fcb-a7e1-31421c7a6344')//import.meta.env.APP_ID); // Replace with the actual value for x-app
        return headers;
      },
 }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllProperties: builder.query<ApiPropertyListResponse, void>({
        query: () => `/search/stays/filtered`,
      }),
    getPropertyById: builder.query<ApiResponse, Number>({
      query: (id: Number) => `/search/stays/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetAllPropertiesQuery, useGetPropertyByIdQuery } = propertiesApi
