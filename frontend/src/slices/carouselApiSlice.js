import { CAROUSEL_URL } from '../constants'; // Replace with your carousel API endpoint
import { apiSlice } from './apiSlice';

export const carouselApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarouselItems: builder.query({
      query: () => ({
        url: CAROUSEL_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Carousel'],
    }),
  }),
});

export const { useGetCarouselItemsQuery } = carouselApiSlice;
