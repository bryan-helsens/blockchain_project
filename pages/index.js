import Header from '../components/Header'
import Portfolio from '../components/Portfolio'
import { useState } from 'react'
import axios from 'axios'
import TransferModal from '../components/TransferModal'
import styled from 'styled-components'

export default function Home({coins}) {
  const [Apicoins] = useState([...coins.slice(0,15)]);

  return (
    <Wrapper>
      <Header />
      {/*<div className={styles.main}>
        <Portfolio coins={myCoins} />
  </div>*/}


        <Content>
            <TransferModal apiCoins={Apicoins}  />
        
        </Content>


    </Wrapper>
  )
}

export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: {
      'X-RapidAPI-Host': process.env.COIN_RANKING_HOST,
      'X-RapidAPI-Key': process.env.COIN_RANKING_KEY,
    },
  }

  const res = await axios.request(options)
  const coins = res.data.data.coins

  return {
    props: { coins },
  }
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: auto;
  background-color: black;
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 2rem;
  padding-right: 2rem;
  margin-top: 4rem;
`