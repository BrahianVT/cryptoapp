import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoHeaders = {
    'x-access-token': 'coinranking79a55c2cf933f548501bf963f68062f02f7fdb76a67b4c71',
    'Origin': 'localhost',
}

const baseUrl = 'https://ancient-meadow-41895.herokuapp.com/https://api.coinranking.com/v2';


const createRequest = (url) => ({ url, headers: cryptoHeaders })

export const cryptoNft = createApi({
    reducerPath: 'cryptoNft',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNfts: builder.query({
            query: (count) => createRequest('/nfts?limit='+count)
        }),
    })
});


export const { useGetCryptoNftsQuery } = cryptoNft;