import { useLang } from '../i18n/LangContext'

const STEPS = [
  { n: '1', titleKey: 'edu.1.title', descKey: 'edu.1.desc' },
  { n: '2', titleKey: 'edu.2.title', descKey: 'edu.2.desc' },
  { n: '3', titleKey: 'edu.3.title', descKey: 'edu.3.desc' },
  { n: '4', titleKey: 'edu.4.title', descKey: 'edu.4.desc' },
]

export function Education() {
  const { t } = useLang()
  return (
    <section className="complex" id="education">
      <div className="wrap">
        <div className="section-head">
          <h2 data-i18n="edu.title">{t('edu.title')}</h2>
          <p data-i18n="edu.subtitle">{t('edu.subtitle')}</p>
        </div>
        <div className="edu-grid">
          <ul className="edu-steps">
            {STEPS.map((step, idx) => (
              <li key={idx}>
                <div className="edu-n">{step.n}</div>
                <div>
                  <h3 data-i18n={step.titleKey}>{t(step.titleKey)}</h3>
                  <p data-i18n={step.descKey}>{t(step.descKey)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="edu-box">
            <h3 data-i18n="edu.cta.title">{t('edu.cta.title')}</h3>
            <p data-i18n="edu.cta.desc">{t('edu.cta.desc')}</p>
            <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} data-i18n="edu.cta.btn">{t('edu.cta.btn')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
