import LinkText from '@/shared/ui/link-text'
import Link from 'next/link'

export default function Subnavigation() {
  return (
    <nav>
      <ul className="nav">
        <li key={'/audio/portfolio'}>
          <Link href="/audio/portfolio">
            <LinkText>Наши работы</LinkText>
          </Link>
        </li>
        <li key={'/audio/constructor'}>
          <Link href="/audio/constructor">
            <LinkText>Конструктор корпусов</LinkText>
          </Link>
        </li>
        <li key={'/audio/gallery'}>
          <Link href="/audio/gallery">
            <LinkText>Галерея</LinkText>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
