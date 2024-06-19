// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Restaurants = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export type Cardapio = {
    id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantById: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
});

export const { useGetFeaturedRestaurantQuery, useGetRestaurantByIdQuery } = api;

export default api;
