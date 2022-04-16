import React from 'react'
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
    coin = coin.coin
  return (
    <div className={styles.wrapper}>
        <div className={styles.center}>
            <div style={{ flex: 3 }}>
                <div className={styles.nameCol}>
                    <div className={styles.coinIcon}>
                        <Image src={coin.logo} alt={coin.name} title={coin.name} />
                    </div>
                    <div>
                        <div className={styles.primary}>{coin.name}</div>
                        <div className={styles.secondary}>{coin.sign}</div>
                    </div>
                </div>
            </div>

            <div style={{ flex: 2 }} className={styles.left}>
                <div className={styles.primary}>{'$'} {coin.balanceUsd}</div>
                <div className={styles.secondary}>{coin.balanceCoin} {coin.sign}</div>
            </div>
        </div>
    </div>
  )
}

export default Coin