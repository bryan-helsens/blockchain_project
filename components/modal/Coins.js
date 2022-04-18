import React from 'react'
import styled from 'styled-components'
import Coin from '../Coin'

const Coins = ({apiCoins}) => {
  return (
    <Wrapper>
        <Content>
            <PortfolioTable>

                <Table>
                    <TableItem>
                        <TableRow>
                            <div style={{ flex: 2 }}>Name</div>
                            <div style={{ flex: 2 }}>Price</div>
                            <div style={{ flex: 1 }}>Change</div>
                            <div style={{ flex: 2 }}>Graph</div>
                        </TableRow>
                    </TableItem>

                    <Divider />

                    {apiCoins && apiCoins.map(coin => (

                    
                        <div key={coin.symbol}>
                            <Coin key={coin.symbol} coin={coin}  />    
                        </div>
            
            
                    ))}

                </Table>
            </PortfolioTable>
        </Content>
    </Wrapper>
  )
}

export default Coins

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
