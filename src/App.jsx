import styles from './App.module.css'
import Head from './components/Head'
import Body from './components/Body'

export default function App() {
    return <main className={styles.main}>
        <div className={styles.wrapper}>
            <Head/>
            <Body/>
        </div>
    </main>
}