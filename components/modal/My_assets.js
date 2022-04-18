import React, { useEffect } from 'react'
import styled from 'styled-components'
import Coin from '../Coin'

const Asset = (/*{coins, apiCoins}*/) => {



  return (
    <Wrapper>
        <Content>
            <PortfolioTable>

                <Table>
                    <TableItem>
                        <TableRow>
                            <div style={{ flex: 2 }}>Name</div>
                            <div style={{ flex: 1 }}>Amount</div>
                            <div style={{ flex: 1 }}>Balance</div>
                            <div style={{ flex: 2 }}>Graph</div>
                        </TableRow>
                    </TableItem>

                    <Divider />

                    {/*coinsData && coinsData.map(coin => (
    
                       
                        <div key={coin.my_coin.symbol}>
                          <Coin key={coin.my_coin.symbol} coin={coin.my_coin} apiCoins={coin.api_coin} />    
                        </div>
             
              
                    ))*/}

                </Table>
            </PortfolioTable>
        </Content>
    </Wrapper>
)}

export default Asset

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`
const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem 1rem;
`

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.div`
  width: 100%;
`

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > th {
    text-align: left;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`
