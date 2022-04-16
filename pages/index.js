import Header from '../components/Header'
import Portfolio from '../components/Portfolio'

const styles = {
  wrapper: 'w-screen h-screen flex flex-col',
  main: 'w-full h-full m-auto flex mt-16',
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>
        <Portfolio />
      </div>

    </div>
  )
}
