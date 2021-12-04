import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '03cf2ed7abmsh8f63edf5641c399p16b1d5jsn5009d0d01470'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest('/coins?limit='+count)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest('/coin/'+coinId)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod }) => createRequest('/coin/'+coinId + '/history/'+timePeriod)
        }),
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
