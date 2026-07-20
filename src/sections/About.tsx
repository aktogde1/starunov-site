import { useLang } from '../i18n/LangContext'
import { Icon } from '../components/Icon'

const TIMELINE = [
  { year: '1989–2011', titleKey: 'timeline.1.title', descKey: 'timeline.1.desc' },
  { year: '2011–2015', titleKey: 'timeline.2.title', descKey: 'timeline.2.desc' },
  { year: '2015–2017', titleKey: 'timeline.3.title', descKey: 'timeline.3.desc' },
  { year: '2018–2019', titleKey: 'timeline.4.title', descKey: 'timeline.4.desc' },
  { yearKey: 'timeline.5.year', titleKey: 'timeline.5.title', descKey: 'timeline.5.desc' },
]

export function About() {
  const { t } = useLang()
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="section-head">
          <h2 data-i18n="about.title">{t('about.title')}</h2>
          <p data-i18n="about.subtitle">{t('about.subtitle')}</p>
        </div>
        <div className="about-grid">
          <div className="about-photo">
            <div className="about-photo-badge">
              <Icon name="star" size="xs" />
              <span data-i18n="about.badge">{t('about.badge')}</span>
            </div>
            <img src="/images/doctor.png" alt={t('about.title')} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div>
            <div className="about-quote" data-i18n="about.quote">{t('about.quote')}</div>
            <div className="about-text">
              <p data-i18n="about.p1" dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
              <p data-i18n="about.p2" dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
              <p data-i18n="about.p3">{t('about.p3')}</p>
            </div>
            <ul className="timeline">
              {TIMELINE.map((item, idx) => (
                <li key={idx}>
                  <span className="yr">{item.year || t(item.yearKey || '')}</span>
                  <span className="info">
                    <b data-i18n={item.titleKey}>{t(item.titleKey)}</b>
                    <span data-i18n={item.descKey}>{t(item.descKey)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
