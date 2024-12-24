import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { Inter } from 'next/font/google'

import Footer from '@/layouts/footer'
import Header from '@/layouts/header'
import Main from '@/layouts/main'
import styles from './styles.module.css'
import '@/shared/styles/global.css'

const inter = Inter({ subsets: ['cyrillic'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const metrikaKey = process.env.YA_METRIKA_KEY;
  const gtmKey = process.env.GTM_KEY
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <div className="app">
          <Header>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIconContainer}>
                <Image
                  className={styles.logoIcon}
                  width={32}
                  height={32}
                  unoptimized
                  src="/favicon.svg"
                  alt="Ahara"
                ></Image>
              </span>
              Ahara
            </Link>
            <div>
              <Link href="/contacts">Контакты</Link>
            </div>
          </Header>
          <Main> {children}</Main>
          <Footer />
        </div>
      </body>
      {/* {metrikaKey && (
        <Script
          id="show-banner"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date(); for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }} k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(${metrikaKey}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true });`,
          }}
        />
      )} */}
      {gtmKey && (
        <Script
          id="show-banner"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){console.log('${gtmKey}');w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmKey}');`,
          }}
        />
      )}
    </html>
  )
}
