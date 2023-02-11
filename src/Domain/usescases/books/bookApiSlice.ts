import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://anapioficeandfire.com/api/",
  }),
  endpoints(builders) {
    return {
      fetchBooks: builders.query<Book[], number | void>({
        query(limit = 10) {
          return `books?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBooksQuery } = apiSlice;
