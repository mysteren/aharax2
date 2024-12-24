import { BASE_URL } from '@/shared/config'
import Subnavigation from '@/widgets/subnavigation'
import Image from 'next/image'

export const metadata = {
  title:
    'Aharax.ru @ahara_audio: аудиотехника, корпуса; cтудия реставрации и изготовления аудиосистем',
  description:
    // "профилатика, обслуживание, реставрация аудиотехники, винил, усилители, колонки, изготовление корпусов для акустики под заказ, покраска, распил",
    'Реставрация и изготовление акустических систем: корпусов аудио колонок и усилителей. Восстановление внешнего вида панели усилителя. Реставрация проигрывателей винила, изготовление плинтов #integratedamplifier #amplifierrestoration #turntables #акустика #колонкиназаказ #корпусаколонок #винил #soundsystem #homesound #loudspeaker #hifi #hifiaudio #реставрация #ремонтусилителя #усилитель #vintageaudio #vintage #audiophile #аудиофил #винтаж #goodsound #oldaudio #retroaudio #hifi',
  alternates: {
    canonical: `${BASE_URL}/`,
  },
}

export default function Home() {
  return (
    <>
      <h1>Ahara audio </h1>
      <div>
        <p>
          Добро пожаловать в нашу мастерскую по изготовлению и реставрации корпусов Акустических
          систем, реставрации и ремонту hi-fi аудиотехники.
        </p>
        <p>
          Свою работу мы начали в 2018 году с конструкторов корпусов акустических систем для
          самостоятельной сборки, которые мы изготавливаем на ЧПУ станке. Fostex, wavecor, visaton,
          sonido, акустика Крылова - уже типовые проекты, которые мы делаем постоянно, как в сборе и
          с финишной отделкой, так и в виде набора для самостоятельной сборки.
        </p>
        <p>
          Сегодня помимо корпусов для акустики мы занимаемся реставрацией и ремонтом аудиотехники,
          производством плинтов.
        </p>
        <Subnavigation />
      </div>
      <div>
        <h2>Галлерея</h2>
        <br />
        <div className="grid" itemScope itemType="http://schema.org/ImageObject">
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/uploads/images/audio/ahara_audio-preview5.jpg"
            itemProp="contentUrl"
          ></Image>
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/uploads/images/audio/ahara_audio-preview.jpg"
            itemProp="contentUrl"
          ></Image>
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/uploads/images/audio/ahara_audio-preview2.jpg"
            itemProp="contentUrl"
          ></Image>
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/uploads/images/audio/ahara_audio-preview3.jpg"
            itemProp="contentUrl"
          ></Image>
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/uploads/images/audio/ahara_audio-preview4.jpg"
            itemProp="contentUrl"
          ></Image>
          <Image
            className="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="ahara_audio_preview"
            loading="lazy"
            priority={false}
            placeholder="empty"
            width={720}
            height={480}
            src="/uploads/images/audio/ahara_audio-preview1.jpg"
            itemProp="contentUrl"
          ></Image>
        </div>
      </div>
      <div>
        <h2>Заказ услуг</h2>
        <p>
          Мы предлагаем широкий спектр услуг для всех любителей качественного звука и старых
          аудиосистем. При реставрации учитываются индивидуальные пожелания клиента. По своим
          работам наша студия несёт гарантийные обязательства.
        </p>
        <p>
          Заказать наши услуги вы можете на сайте{' '}
          <a className="sb link" href="https://deskfi.ru/" target="_blank">
            deskfi.ru
          </a>
        </p>
        <h3>Стандартный список работ для усилителей:</h3>
        <ol>
          <li>
            Промывка всех переключателей, переменных резисторов, замена полупроводниковых элементов.
          </li>
          <li>Замена всех старых электролитических конденсаторов</li>
          <li>Осуществлены все регулировок согласно сервисному мануалу.</li>
          <li>Все технические параметры приводятся к заводским.</li>
          <li>
            Фанерование шпоном (по желанию для деревянного корпуса) и нанесение нового покрытия на
            корпус.
          </li>
          <li>Нанесение нового покрытия на решетки.</li>
          <li>Очистка лицевой панели.</li>
          <li>Тестовое прослушивание усилителя более 120ч.</li>
        </ol>
        <p></p>
        <p>
          Наша цель - вдохнуть новую жизнь в вашу технику. Позвольте нам воссоздать,
          продемонстрировать и сохранить красоту и наследие аудиотехники! Свяжитесь с нами сегодня и
          превратите вашу аудиоаппаратуру в настоящее произведение искусства.
        </p>
      </div>
    </>
  )
}

// export default function Home() {

//   return (
//     <>
//       <h1>Наша деятельность</h1>
//       <p>
//         Добро пожаловать на наш сайт! Мы занимаемся разными видами деятельности,
//         включая реставрацию аудиосистем, усилителей и виниловых проигрывателей.
//       </p>
//       <section className="section">
//         <article>
//           <h2>Мастерская Ahara Audio</h2>
//           <p>
//             Доверьте нам заботу о вашей аудиотехнике, и мы превратим ее в
//             настоящую жемчужину, радующую вас невероятным звуком и прекрасным
//             внешним видом. <span className="b">@ahara_audio</span>
//           </p>
//           <ul>
//             <li>
//               <h3>Реставрация аудиосистем и усилителей:</h3>
//               <p>
//                 Наш опыт в области реставрации аудиосистем и усилителей
//                 позволяет нам вернуть вашей технике бывшую славу. Мы проведем
//                 полное техническое обслуживание, заменим неисправные детали и
//                 избавимся от шумов и искажений.
//               </p>
//             </li>
//             <li>
//               <h3>Восстановление виниловых проигрывателей:</h3>
//               <p>
//                 Если у вас есть виниловый проигрыватель, который требует
//                 внимания, мы готовы помочь. Мы осуществляем комплексный ремонт и
//                 регулировку проигрывателей, замену головки звукоснимателя и
//                 восстановление поврежденных частей.
//               </p>
//             </li>
//             <li>
//               <h3>Изготовление корпусов:</h3>
//               <p>

//               </p>
//             </li>
//           </ul>
//           <nav>
//             <ul className="nav">
//               <li>
//                 <Link href="/audio">
//                   <LinkText>Подробнее</LinkText>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/audio/portfolio">
//                   <LinkText>Наши работы</LinkText>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </article>
//         {/* <article>
//           <h2>Блог</h2>
//           <p>наши статьи</p>
//           <nav>
//             <ul className="nav">
//               <li>
//                 <Link href="/blog">
//                   <LinkText>Переход в раздел</LinkText>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </article> */}
//         <article>
//           <h2>Справочники</h2>
//           <p>Теория, эмуляция расчеты и электрических цепей</p>
//           <nav>
//             <ul className="nav">
//               <li>
//                 <Link href="/electrical">
//                   <LinkText>Электроника и электротехника</LinkText>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/tool/electrical-simulator">
//                   <LinkText>Симулятор электронных схем</LinkText>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </article>
//       </section>
//     </>
//   );
// }
