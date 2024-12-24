import { ReactNode } from 'react'
import styles from './header.module.css'

type Props = {
  children: ReactNode
}

export default function Header({ children }: Props) {
  return (
    <header className={styles.root}>
      <div className={`container  ${styles.content}`}>{children}</div>
    </header>
  )
}
