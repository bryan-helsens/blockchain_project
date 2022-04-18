import React from 'react'
import styled from 'styled-components'
import Moralis from 'moralis'
import { FaInfoCircle } from 'react-icons/fa'

const styles = {
    a: "text-yellow-400 hover:text-[#3773f5] cursor-pointer text-xl",
    notFound: "text-red-800"
}

const Transaction = ({transaction}) => {
    console.log(transaction);

    const BASE_URL = 'https://rinkeby.etherscan.io/tx/'

    const formattedAddress = (addres) => {
        return addres.slice(0, 7) + '...' + addres.slice(25)
    }

    const formattedHash = (addres) => {
        console.log(addres);
        if (addres !== undefined && addres !== null){
            return addres.slice(0, 7) + '...' + addres.slice(40)
        }  
    }

  return (
    <Wrapper>
    <div>
       <div style={{ flex: 3 }}>
           <HashCol>
               <div>
                   <Primary>{formattedHash(transaction.hash)}</Primary>
               </div>
           </HashCol>
       </div>

       <div style={{ flex: 2 }}>
            <Primary>{ 
                (transaction.to_address !== null &&  transaction.to_address !== undefined) ?
                formattedAddress(transaction.to_address) : 
                (<div className={styles.notFound}>
                    No address found
                </div>)
            }</Primary>
       </div>

       <div style={{ flex: 1.5 }}>
            <Primary>{Moralis.Units.FromWei(transaction.value)} ETH</Primary>
       </div>

       <div style={{ flex: 1 }}>
            <Primary>{(transaction.block_timestamp).slice(0, 10)}</Primary>
       </div>

       <div style={{ flex: 0.5 }}>
            <Primary>
                <a 
                    href={`${BASE_URL}${transaction.hash}`} 
                    rel="noreferrer" 
                    target="_blank"
                    className={styles.a}
                >
                    <FaInfoCircle />
                </a>
            </Primary>
       </div>

   </div>
</Wrapper>
  )
}

export default Transaction

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }
`

const HashCol = styled.div`
    display: flex;
    align-items: center;
`

const Primary = styled.div`
    margin-bottom: 0.1rem;
`

const Secondary = styled.div`
    color: #8a919e;
    font-size: 0.8rem;
`
