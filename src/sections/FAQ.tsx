import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

const FAQS = [
  { qKey: 'faq.1.q', aKey: 'faq.1.a' },
  { qKey: 'faq.2.q', aKey: 'faq.2.a' },
  { qKey: 'faq.3.q', aKey: 'faq.3.a' },
  { qKey: 'faq.4.q', aKey: 'faq.4.a' },
  { qKey: 'faq.5.q', aKey: 'faq.5.a' },
  { qKey: 'faq.6.q', aKey: 'faq.6.a' },
  { qKey: 'faq.7.q', aKey: 'faq.7.a' },
]

export function FAQ() {
  const { t } = useLang()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="about">
      <div className="wrap">
        <div className="section-head center">
          <h2 data-i18n="faq.title">{t('faq.title')}</h2>
          <p data-i18n="faq.subtitle">{t('faq.subtitle')}</p>
        </div>
        <div className="faq-list">
          {FAQS.map((item, idx) => (
            <div className={`faq-item${open === idx ? ' open' : ''}`} key={idx}>
                <div className="faq-q" onClick={() => setOpen(open === idx ? null : idx)}>
                  <span data-i18n={item.qKey}>{t(item.qKey)}</span>
                  <span className="faq-plus">
                    <svg className="ic ic-sm" viewBox="0 0 24 24" style={{ transform: open === idx ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform .2s' }}>
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </div>
                <div className="faq-a" style={{ maxHeight: open === idx ? '500px' : '0px', overflow: 'hidden', transition: 'max-height .3s ease', marginTop: open === idx ? '12px' : '0' }}>
                  <p data-i18n={item.aKey}>{t(item.aKey)}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
