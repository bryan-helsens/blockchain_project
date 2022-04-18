import React, { useContext } from 'react'
import { BlockchainContext } from '../context/BlockchainContext';
import Image from 'next/image'
import avatar from '../temp/avatar.png'

const styles = {
    wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
    leftMenu: `flex gap-3`,
    rightMenu: `flex gap-3 items-center`,
    menuItem: `text-lg text-white flex items-center mx-4 cursor-pointer font-bold hover:text-blue-500 duration-300`,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
}

// Signout Todo 
// Connect Wallet

const Header = () => {
    const { connectWallet, signOut, currentAccount, isAuthenticated, formattedAccount, accountName } = useContext(BlockchainContext);

  return (
    <div className={styles.wrapper}>

        <div className={styles.leftMenu}>
            <div className={styles.menuItem}>Rewards</div>
            <div className={styles.menuItem}>Portfolio</div>
            <div className={styles.menuItem}>Cash</div>
            <div className={styles.menuItem}>Messages</div> 
            
        </div>
        <div className={styles.rightMenu}>

            {isAuthenticated ? (
                <>
                    <div className={styles.menuItem}>{accountName?.split(' ')[0]}</div>
                    <div className={styles.userImageContainer}>
                        <Image
                            className={styles.userImage}
                            src={avatar}
                            width={40}
                            height={40}
                            title='avatar'
                            alt='avatar'
                        />
                    </div>
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