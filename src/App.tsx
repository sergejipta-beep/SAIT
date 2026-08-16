import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import Reveal from './components/Reveal'

const GITHUB_RAW = 'https://raw.githubusercontent.com/nuf96264-cloud/SAIT/main/'

function ghUrl(file: string) {
  return GITHUB_RAW + encodeURIComponent(file)
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const cases = [
  {
    tag: 'Малый бизнес · ЛПХ',
    title: 'Крафтовый бренд из «ярмарки» — в онлайн-продажи',
    task: 'Отстроиться от масс-маркета, запустить стабильные продажи по РФ.',
    video: undefined,
    results: [
      { value: '45 000', label: 'просмотров в VK за месяц' },
      { value: '180 ₽', label: 'CPL — в 2 раза ниже рынка' },
      { value: '3 недели', label: 'распродан сезонный запас' },
    ],
  },
  {
    tag: 'Инфобизнес · Эксперт',
    title: 'Прогрев на запуск: удержание +35%',
    task: 'Снизить стоимость подписчика и удержать внимание на длинных видео.',
    video: {
      src: ghUrl('итоговый.mp4'),
      fallback: '/videos/case-expert.mp4',
    },
    results: [
      { value: '48%', label: 'retention — было 22%' },
      { value: '−35%', label: 'стоимость подписчика' },
      { value: '×4', label: 'ROAS на рекламе запуска' },
    ],
  },
  {
    tag: 'B2B · IT / SaaS',
    title: 'Сложный продукт — понятно за 60 секунд',
    task: 'Объяснить софт для лендинга без дорогой 3D-графики.',
    video: {
      src: ghUrl('дон Румата 1.mp4'),
      fallback: '/videos/case-b2b.mp4',
    },
    results: [
      { value: '+40%', label: 'время на странице с видео' },
      { value: '3.8%', label: 'конверсия в демо (было 1.5%)' },
      { value: '150 т₽', label: 'экономия на найме аниматора' },
    ],
  },
]

const packages = [
  {
    name: 'Старт: 3 видео',
    price: 'от 90 000 ₽',
    desc: 'Стратегия, 3 ролика под ключ, оптимизация под площадки.',
    features: ['Бриф и KPI', 'Имидж или креативы', 'Раскадровки в Midjourney', 'Файлы под каждую площадку'],
    highlight: false,
  },
  {
    name: 'Контент-месяц',
    price: 'от 150 000 ₽/мес',
    desc: 'Системная контент-матрица: 15–30 шортсов и креативов.',
    features: ['Контент-матрица', '15–30 единиц контента', 'ИИ-упаковка и саунд', 'Джаст-ин-тайм отгрузка'],
    highlight: true,
  },
  {
    name: 'White-label / подряд',
    price: 'обсуждается',
    desc: 'Партии креативов для агентств и таргетологов.',
    features: ['Быстрый отгруз тестов', 'AI-генерация пачками', 'Под ваш бренд', 'NDA и прайс на поток'],
    highlight: false,
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Бриф и цифры',
    desc: 'Фиксируем KPI: заявки, стоимость лида, окупаемость. Говорим на языке воронки, а не «красивой картинки».',
  },
  {
    num: '02',
    title: 'Стратегия и раскадровка',
    desc: 'Мудборд и световые схемы в Midjourney ещё до площадки. Утверждаем стиль — страхуем бюджет от пересъёмок.',
  },
  {
    num: '03',
    title: 'Съёмка и генерация',
    desc: 'Живое лицо и фактура на камеру + ИИ-вставки там, где это дешевле: макро, таймлапсы, атмосфера.',
  },
  {
    num: '04',
    title: 'Монтаж и упаковка',
    desc: 'Ритм, саунд в Suno, автосубтитры. Финальные файлы под каждую площадку — без «полуфабрикатов».',
  },
]

const marqueeTools = [
  'Midjourney', 'Kling AI', 'Runway Gen-3', 'Suno', 'ElevenLabs',
  'DaVinci Resolve', 'Flux', 'Auto Reframe', 'Voice Isolation',
]

function Hero() {
  return (
    <section className="hero-section" id="top">
      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="hero-badge">
          <span className="pulse-dot" />
          Гибридный видеопродакшн · ИИ + живая съёмка
        </motion.div>

        <motion.h1 variants={item}>
          Видео, которое <span className="grad-text">продаёт</span> — без «пластиковых» нейросетей
        </motion.h1>

        <motion.p variants={item} className="hero-sub">
          Живые эмоции и фактура + невидимый ИИ-стек. Стратегия агентства,
          скорость фрилансера, себестоимость, оптимизированная нейросетями.
        </motion.p>

        <motion.div variants={item} className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Рассчитать стоимость видео
          </a>
          <a href="#cases" className="btn btn-ghost">
            Смотреть кейсы
          </a>
        </motion.div>

        <motion.div variants={item} className="hero-stats">
          <div className="stat">
            <b>50+</b>
            <span>проектов под ключ</span>
          </div>
          <div className="stat">
            <b>300+</b>
            <span>шортсов и креативов</span>
          </div>
          <div className="stat">
            <b>×4</b>
            <span>макс. ROAS кейса</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Скролл</span>
        <div className="mouse">
          <div className="wheel" />
        </div>
      </motion.div>
    </section>
  )
}

function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeTools, ...marqueeTools].map((t, i) => (
            <span className="marquee-item" key={`${t}-${i}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="section-label">Обо мне</p>
          <h2 className="section-title">
            Артём — видеостратег, основатель студии «Смыслы в кадре»
          </h2>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={0.1}>
            <p className="about-text">
              Я начинаю работу не с выбора объектива, а с брифа, цифр и
              бизнес-цели. Моя задача — не «красивая картинка для портфолио»,
              а рабочий инструмент для трафика и конверсии. В отличие от
              «чистых» генераторов я сохраняю живую фактуру, лицо основателя
              и реальную эмоцию — а нейросети использую точечно и невидимо.
            </p>
          </Reveal>
          <div className="about-points">
            {[
              ['KPI на старте', 'Заявки, стоимость лида, удержание, ROAS — фиксируем до съёмки'],
              ['Под ключ', 'Никаких «часов съёмки» и сюрпризов в смете'],
              ['Для бизнеса', 'Пакеты и подписки, а не разовые ролики «за 5 000 ₽»'],
            ].map(([title, desc], i) => (
              <Reveal key={title} delay={0.15 + i * 0.1} className="point">
                <div className="point-dot" />
                <div>
                  <b>{title}</b>
                  <p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Cases() {
  return (
    <section className="section" id="cases">
      <div className="container">
        <Reveal>
          <p className="section-label">Кейсы</p>
          <h2 className="section-title">Результаты, а не «красивые картинки»</h2>
        </Reveal>
        <div className="cases-grid">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.12}>
              <motion.article
                className="case-card"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                {c.video && (
                  <div className="case-video">
                    <video
                      src={c.video.src}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      controls
                      onError={(e) => {
                        const v = e.currentTarget
                        if (v.dataset.fallback) return
                        v.dataset.fallback = '1'
                        v.src = c.video.fallback
                        v.play().catch(() => undefined)
                      }}
                    />
                  </div>
                )}
                <span className="case-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <p className="case-task">{c.task}</p>
                <div className="case-results">
                  {c.results.map((r) => (
                    <div className="case-result" key={r.label}>
                      <b className="grad-text">{r.value}</b>
                      <span>{r.label}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Packages() {
  return (
    <section className="section" id="packages">
      <div className="container">
        <Reveal>
          <p className="section-label">Услуги</p>
          <h2 className="section-title">Пакеты, которые решают задачи</h2>
        </Reveal>
        <div className="packages-grid">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <motion.div
                className={`package-card${p.highlight ? ' highlight' : ''}`}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                {p.highlight && <span className="package-flag">Хит</span>}
                <h3>{p.name}</h3>
                <b className="package-price">{p.price}</b>
                <p className="package-desc">{p.desc}</p>
                <ul>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#contact" className={`btn ${p.highlight ? 'btn-primary' : 'btn-ghost'}`}>
                  Выбрать пакет
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal>
          <p className="section-label">Анатомия одного ролика</p>
          <h2 className="section-title">Как рождается видео, которое окупается</h2>
        </Reveal>
        <div className="process-grid">
          {processSteps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="process-card">
                <span className="process-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const glow = useTransform(scrollYProgress, [0, 1], [0.15, 0.55])
  const glowOpacity = useTransform(glow, (v) => v)

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <motion.div
        className="contact-glow"
        style={{ opacity: glowOpacity }}
        aria-hidden="true"
      />
      <div className="container">
        <Reveal>
          <p className="section-label">Контакты</p>
          <h2 className="section-title">Сделайте видео, которое окупится</h2>
          <p className="contact-sub">
            Оставьте заявку — за 24 часа рассчитаю стоимость под ваш формат и
            нишу и покажу, как это укладывается в вашу воронку.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="contact-actions">
            <a href="#top" className="btn btn-primary btn-lg">
              Рассчитать стоимость
            </a>
            <a href="#top" className="btn btn-ghost btn-lg">
              Забронировать съёмочный день
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <a className="nav-logo" href="#top">
        <span className="logo-mark">СВ</span> Смыслы&nbsp;в&nbsp;кадре
      </a>
      <nav className="nav-links">
        <a href="#about">Обо мне</a>
        <a href="#cases">Кейсы</a>
        <a href="#packages">Услуги</a>
        <a href="#process">Процесс</a>
      </nav>
      <a href="#contact" className="btn btn-primary btn-sm">
        Связаться
      </a>
    </motion.header>
  )
}

export default function App() {
  return (
    <div className="site">
      <AnimatedBackground />
      <div className="aurora" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Cases />
        <Packages />
        <Process />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} «Смыслы в кадре» · Артём</p>
        <p>Видео, которое продаёт</p>
      </footer>
    </div>
  )
}
