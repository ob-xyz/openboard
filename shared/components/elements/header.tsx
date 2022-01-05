import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/scss/Header.module.scss'

const Header: NextPage = () => {
  return (
    <div>
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.imglogo}>
                <Image
                    src="/assets/img/mirin-wtlogo.png"
                    alt="mirin logo"
                    width={15}
                    height={32.5}
                />
                </a>
            </Link>
        </header>
    </div>
  )
}

export default Header