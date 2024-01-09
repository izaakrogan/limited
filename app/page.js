import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
         Limited Resources
        </p>
        <div>

        </div>
      </div>

      <div className={styles.center}>
        <h1 style={{marginBottom: 10}}>Crafted one of a kind pieces</h1>
        <p>Website coming soon</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <p>Find in-depth information about Next.js features and API.</p>
          <Image
            src={'/a.jpg'}
            alt="Picture of pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.card}>
          <Image
            src={'/b.jpg'}
            alt="Picture of pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.card}>
          <Image
            src={'/c.jpg'}
            alt="Picture of pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.card}>
          <Image
            src={'/f.jpg'}
            alt="Picture of pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </main>
  )
}
