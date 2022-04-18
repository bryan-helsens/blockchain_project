import React from 'react'
import styled from 'styled-components'
import Moralis from 'moralis'

const MyCoin = ({coin}) => {

  console.log(coin, 'mycoin');
  return (
    <Wrapper>
         <div>
            <div style={{ flex: 2 }}>
                <NameCol>
                    <div>
                        <Primary>{coin.name}</Primary>
                        <Secondary>{coin.symbol}</Secondary>
                    </div>
                </NameCol>
            </div>

            <div style={{ flex: 2 }}>
                <Primary>{Moralis.Units.FromWei(coin.balance)}</Primary>
            </div>

        </div>
    </Wrapper>
  )
}

export default MyCoin

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

const NameCol = styled.div`
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