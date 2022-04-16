import React from 'react'
import Moralis from 'moralis'
import Image from 'next/image'

const styles = {
    wrapper: `flex w-full justify-between items-center`,
    nameCol: 'flex items-center',
    coinIcon: 'w-7 mr-4',
    center: 'w-full flex justify-between items-center p-2 pl-7 pt-4 pb-4 float-left',
    primary: 'mb-[0.1rem]',
    secondary: 'text-[#8a919e] text-[0.8rem]',
    left: 'mr-5',
}

const Coin = (coin) => {
    console.log(coin);

    coin = coin.coin
  return (
    <div className={styles.wrapper}>
        <div className={styles.center}>
            <div style={{ flex: 3 }}>
                <div className={styles.nameCol}>
                    <div className={styles.coinIcon}>
                        <Image src={"/btc.png"} height={150} width={150} alt={coin.name} title={coin.name} />
                    </div>
                    <div>
                        <div className={styles.primary}>{coin.name}</div>
                        <div className={styles.secondary}>{coin.symbol}</div>
                    </div>
                </div>
            </div>

            <div style={{ flex: 2 }}>
                <div className={styles.primary}>{Moralis.Units.FromWei(coin.balance)}</div>
            </div>

            <div style={{ flex: 2 }} className={styles.left}>
                <div className={styles.primary}>{'$'} {Moralis.Units.FromWei(coin.balance) * 5}</div>
                <div className={styles.secondary}>{coin.balanceCoin} {coin.symbol}</div>
            </div>
        </div>
    </div>
  )
}

export default Coin