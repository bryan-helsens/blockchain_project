import React, { useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import MyCoin from '../MyCoin'
import { BlockchainContext } from '../../context/BlockchainContext'
import { useERC20Balances, useMoralisWeb3Api } from 'react-moralis'
import Moralis from 'moralis'

const Asset = () => {

  const Web3Api = useMoralisWeb3Api();
  const {fetchERC20Balances, data} = useERC20Balances()

  const [ethBalance, setEtherBalance] = useState(0)

  const fetchNativeBalance = async () => {
      const result = await Web3Api.account.getNativeBalance({
          chain: 'rinkeby',
          address: '0x11405e115110810d770EFDf8376A83B0B24DCdeE'
      }).catch(e => console.error(e));

      console.log(result);

      if (result){
          setEtherBalance(Moralis.Units.FromWei(result.balance))
      }
  }

  useEffect(() => {
      fetchNativeBalance()
      fetchERC20Balances({
          params: {
              chain: 'rinkeby',
              address: '0x11405e115110810d770EFDf8376A83B0B24DCdeE',
          }
      })
  },[])

  console.log(data);

  return (
    <Wrapper>
        <Content>
            <PortfolioBalance>
              {ethBalance} ETH
            </PortfolioBalance>

            <PortfolioTable>

                <Table>
                    <TableItem>
                        <TableRow>
                            <div style={{ flex: 2 }}>Name</div>
                            <div style={{ flex: 2 }}>Amount</div>
                        </TableRow>
                    </TableItem>

                    <Divider />

                    {data && data.map(coin => (
  
                      <div key={coin.symbol}>
                        <MyCoin key={coin.symbol} coin={coin} />    
                      </div>
             
              
                    ))}

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
  height: 100vh;
  width: 100%;
`
const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem 1rem;
`

const PortfolioBalance = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
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
