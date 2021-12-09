import React from 'react';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptoNftsQuery } from '../services/cryptoNft';
import millify from 'millify';

import { Link } from 'react-router-dom';


const Nfts = ({ simplified}) => {
    const count = simplified ? 10: 100;
    const { data: nftList, isFetching } = useGetCryptoNftsQuery(count)
    const [nftsL, setNfts] = React.useState(nftList?.data?.nfts);

    
    
    React.useEffect(() =>{
       console.log('Here')
    },[nftList])

    if(isFetching) return 'Loading ...'
    console.log(nftsL)
    console.log(nftList)
    return (
        <Row gutter={[32, 32]} className="crypto-card-container">
                {
                    nftsL?.map((currency) => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                           
                                <Card title={`${currency.dappName}`} onClick={() => { if(currency.externalUrl)window.open(currency.externalUrl) }}
                                    extra={<img className="crypto-image" src={ currency.image || 'nft.png' } />} hoverable>
                                    <p> Name: {currency.name}</p>
                                    <p> Price USD: {millify(currency.priceInDollar)}</p>
                                    <p> Price ETH: {millify(currency.price)}</p>
                                </Card>
                           
                        </Col>
                    ))
                }
            </Row>
    )
}

export default Nfts
