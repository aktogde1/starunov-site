import { useState, useEffect } from 'react'
import { useLang } from '../i18n/LangContext'

export function StickyCTA() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      href="#contact"
      className={`sticky-cta${visible ? ' visible' : ''}`}
      onClick={(e) => { e.preventDefault(); scrollToContact() }}
    >
      <svg className="ic ic-md" viewBox="0 0 24 24" style={{ stroke: '#fff' }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span data-i18n="sticky.cta">{t('sticky.cta')}</span>
    </a>
  )
}