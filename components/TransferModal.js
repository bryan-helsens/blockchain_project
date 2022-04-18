import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Asset from './modal/Asset'
import Coins from './modal/Coins'


const TransferModal = ({apiCoins}) => {

    const [action, setAction] = useState('coins');

    const selectedStyle = {
        color: '#3773f5',
    }

    const unselectedStyle = {
        border: '1px solid #282b2f',
    }

    const selectedModal = option => {
        switch(option) {
            case "assets":
                return (
                    <Asset />
                )

            case "coins":
                return (
                    <Coins apiCoins={apiCoins} />
                )
        }
    }

  return (
    <Wrapper>
        <Selector>
            <Option 
                style={ action == 'coins' ? selectedStyle : unselectedStyle} 
                onClick={() => setAction('coins')}
            >
                <p>Coins</p>
            </Option>

            <Option 
                style={ action == 'assets' ? selectedStyle : unselectedStyle} 
                onClick={() => setAction('assets')}
            >
                <p>Your Assets</p>
            </Option>

            <Option 
                style={ action == 'transfer' ? selectedStyle : unselectedStyle} 
                onClick={() => setAction('transfer')}
            >
                <p>Transfer</p>
            </Option>

            
            <Option 
                style={ action == 'transactions' ? selectedStyle : unselectedStyle} 
                onClick={() => setAction('transactions')}
            >
                <p>Transactions</p>
            </Option>
        </Selector>

        <ModalMain>
            {selectedModal(action)}
        </ModalMain>
    
    </Wrapper>
  )
}

export default TransferModal

const Wrapper = styled.div`
    color: white;
    border: 1px solid #282b2f;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
`

const Selector = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 5rem;
`

const Option = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    font-weight: 600;

    &:hover {
        cursor: pointer;
        background-color: #111214;
    }
`

const ModalMain = styled.div`
    padding: 1rem;
    flex: 1;
`