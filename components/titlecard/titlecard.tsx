import { ReactElement } from 'react'

import styles from './titlecard.module.scss'

export default function Titlecard(): ReactElement {

    return (
        <section className={styles.titlecard}>
            <h1 className={styles.title}>
              Jackson Tarlin
            </h1>
            <h2 className={styles.subtitle}>
              Software engineer by day, game developer by night
            </h2>
        </section>
    )
}