import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '03cf2ed7abmsh8f63edf5641c399p16b1d5jsn5009d0d01470'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count  }) =>  createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`  )
        })  
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;