import Header from '../components/Header'

const styles = {
  wrapper: 'w-screen h-screen flex flex-col',
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  )
}
