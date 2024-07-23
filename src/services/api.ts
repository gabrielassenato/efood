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

export type Product = {
  id: number
  price: number
}

export type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string,
    address: {
      description: string,
      city: string,
      zipCode: string,
      number: number,
      complement: string
    }
  }
  payment: {
    card: {
      name: string,
      number: string,
      code: number,
      expires: {
        month: number,
        year: number
      }
    }
  }
}

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
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
});

export const { useGetFeaturedRestaurantQuery, useGetRestaurantByIdQuery, usePurchaseMutation } = api;

export default api;
