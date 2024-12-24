import { ReactNode } from 'react'
import styles from './link-text.module.css'

type Props = {
  children: ReactNode
  active?: boolean
}

export const LinkText = ({ children, active }: Props) => {
  return <span className={`${styles.link}  ${active ? styles.active : ''}`}>{children}</span>
}
