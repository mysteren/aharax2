import IconTg from '@/shared/icons/tg'
import IconVk from '@/shared/icons/vk'
import styles from './footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.root}>
      <div className={`${styles.content} container`}>
        <span>Copyright © 2018 - {year}</span>
        <div className={styles.col3}>
          <span>@ahara_audio:</span>
          <a
            className={styles.icon}
            href="https://t.me/aharaaudio"
            target="_blank"
            aria-label="Телеграмм канал"
            rel="nofollow noopener"
            data-group-track-type="link"
          >
            <span style={{ height: '1.6rem', width: '1.6rem' }}>
              <IconTg />
            </span>
          </a>
          <a
            className={styles.icon}
            href="https://vk.com/aharaaudio"
            target="_blank"
            aria-label="ВКонтакте"
            rel="nofollow noopener"
            data-group-track-type="link"
          >
            <span style={{ height: '1.6rem', width: '1.6rem' }}>
              <IconVk />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
