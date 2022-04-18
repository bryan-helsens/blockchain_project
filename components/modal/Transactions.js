import React, { useState, useEffect } from 'react'
import { useMoralisWeb3Api } from 'react-moralis'
import styled from 'styled-components'
import Transaction from './Transaction'

const Transactions = () => {

    const Web3Api = useMoralisWeb3Api();
    const [transactions, setTransactions] = useState()
    
    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: 'rinkeby',
            address: '0x11405e115110810d770EFDf8376A83B0B24DCdeE',
            limit: 15
        }).catch(e => console.error(e));

        console.log(data);

        if (data){
            setTransactions(data.result)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    console.log(transactions);


  return (
    <Wrapper>
        <Content>
            <TransactionTitle>
              My last 15 transactions
            </TransactionTitle>

            <PortfolioTable>
                <Table>
                    <TableItem>
                        <TableRow>
                            <div style={{ flex: 3 }}>Hash</div>
                            <div style={{ flex: 2 }}>To</div>
                            <div style={{ flex: 1.5 }}>Amount</div>
                            <div style={{ flex: 1 }}>Date</div>
                            <div style={{ flex: 0.5 }}>Info</div>
                        </TableRow>
                    </TableItem>

                    <Divider />

                    {transactions && transactions.map(transaction => (
                        <div key={transaction.hash}>
                            <Transaction key={transaction.hash} transaction={transaction} />    
                        </div>
                    ))}

                </Table>
            </PortfolioTable>
        </Content>
    </Wrapper>
  )
}

export default Transactions

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: scroll;
`

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem 1rem;
`


const TransactionTitle = styled.div`
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
