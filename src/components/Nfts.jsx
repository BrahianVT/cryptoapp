import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { useGetCryptoNftsQuery } from '../services/cryptoNft';
import millify from 'millify';

import { Link } from 'react-router-dom';

const { Title } = Typography;
const Nfts = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: nftList, isFetching } = useGetCryptoNftsQuery(count)
    const [nftsL, setNfts] = React.useState(nftList?.data?.nfts);



    React.useEffect(() => {
        console.log('Here')
    }, [nftList])

    if (isFetching) return 'Loading ...'
    console.log(nftsL)
    console.log(nftList)
    return (
        <>
             <Title level={2}> What is a NFT? </Title>
            <Col className="coin-desc-link">
                <Title level={3} className="coin-details-heading">
                    NFTs (Non Fungible Tokens) - are unique assets.
                    Each NFT belongs to a Dapp (Decentralized Application), which technically is one or more smart contracts on the blockchain. Such smart contract addresses mostly follow a well defined standard, such as ERC-721 or ERC-1155.
                    More practically; an example of a Dapp would be cryptokitties - the ecosystem - while a particular cryptokitty such as Susi Scrummyswoggle is an NFT.
                    Each NFT can change ownership, by making transactions on the blockchain. We follow these transactions and calculate the exchange rate in US Dollars for the amount of tokens used in these transactions, and list the latest rate as the current value of the NFT.
                </Title>

            </Col>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {
                    nftsL?.map((currency) => (
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>

                            <Card title={`${currency.dappName}`} onClick={() => { if (currency.externalUrl) window.open(currency.externalUrl) }}
                                extra={<img className="crypto-image" src={currency.image || 'nft.png'} />} hoverable>
                                <p> Name: {currency.name}</p>
                                <p> Price USD: {millify(currency.priceInDollar)}</p>
                                <p> Price ETH: {millify(currency.price)}</p>
                            </Card>

                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Nfts
