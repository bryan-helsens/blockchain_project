import React, { useContext } from 'react'
import { BlockchainContext } from '../context/BlockchainContext';

const styles = {
    container: 'flex w-screen h-16 bg-black px-24 py-3 mb-5 fixed justify-end',
    rightHeader: 'flex items-center justify-end text-white gap-8',
    menuItem: 'cursor-pointer font-bold hover:text-blue-500 duration-300',
}

// Signout Todo 
// Connect Wallet

const Header = () => {
    const { connectWallet, signOut, currentAccount, isAuthenticated, formattedAccount, accountName } = useContext(BlockchainContext);

    console.log(currentAccount, formattedAccount);

  return (
    <div className={styles.container}>

        <div className={styles.rightHeader}>
            <div className={styles.menuItem}>Rewards</div>
            <div className={styles.menuItem}>Portfolio</div>
            <div className={styles.menuItem}>Cash</div>
            <div className={styles.menuItem}>Messages</div> 
            

            {isAuthenticated ? (
                <>
                    <div className={styles.menuItem}>{accountName?.split(' ')[0]}</div>
                    <div className={styles.menuItem}>
                        {
                            formattedAccount
                        }
                    </div>
                    <div className={styles.menuItem} onClick={() => signOut()}>
                        Logout
                    </div>
                </>
            ) : (

                <div className={styles.menuItem} onClick={() => connectWallet()}>
                    Login
                </div>
            )}

        </div>
    </div>
  )
}

export default Header