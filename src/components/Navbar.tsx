import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

const NAV_LINKS = [
  { id: 'about', key: 'nav.about' },
  { id: 'technology', key: 'nav.tech' },
  { id: 'complex', key: 'nav.complex' },
  { id: 'pricing', key: 'nav.pricing' },
  { id: 'education', key: 'nav.edu' },
  { id: 'reviews', key: 'nav.reviews' },
  { id: 'certificates', key: 'nav.certs' },
]

export function Navbar({ a11y, setA11y }: { a11y: boolean; setA11y: (v: boolean) => void }) {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav>
        <div className="wrap">
          <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}) }}>
            Старунов<span> Э.В.</span>
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollTo(link.id) }}>
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <a
              href="https://wa.me/79318889990?text=Здравствуйте! Хочу записаться на консультацию по лазерной коррекции"
              target="_blank"
              rel="noopener"
              className="nav-cta"
            >
              <span data-i18n="nav.contact">{t('nav.contact')}</span>
            </a>
            <button
              className={`a11y-toggle ${a11y ? 'active' : ''}`}
              onClick={() => setA11y(!a11y)}
              aria-label="Версия для слабовидящих"
            >
              A+
            </button>
            <div className="lang-switcher" role="group" aria-label="Language">
              <button
                className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
                onClick={() => setLang('ru')}
                aria-pressed={lang === 'ru'}
              >
                RU
              </button>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>
            <button
              className={`nav-burger ${open ? 'open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="Меню"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {[...NAV_LINKS, { id: 'contact', key: 'nav.contact' }].map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(link.id) }}
          >
            {t(link.key)}
          </a>
        ))}
      </div>
    </>
  )
}
