import { ReactNode } from 'react'
import styles from './main.module.css'

type Props = {
  children: ReactNode
}

export default function Main({ children }: Props) {
  return <main className={`container ${styles.root}`}>{children}</main>
}
