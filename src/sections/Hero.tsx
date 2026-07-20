import { useLang } from '../i18n/LangContext'
import { Icon } from '../components/Icon'

export function Hero() {
  const { t } = useLang()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero-inner">
          <h1
            data-i18n="hero.title"
            dangerouslySetInnerHTML={{ __html: t('hero.title') }}
          />
          <p className="lead" data-i18n="hero.lead">{t('hero.lead')}</p>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="hero-meta-num">35 000+</div>
              <div className="hero-meta-label" data-i18n="hero.meta1_label">{t('hero.meta1_label')}</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-num">7</div>
              <div className="hero-meta-label" data-i18n="hero.meta2_label">{t('hero.meta2_label')}</div>
            </div>
            <div className="hero-meta-item">
              <div className="hero-meta-num">5</div>
              <div className="hero-meta-label" data-i18n="hero.meta3_label">{t('hero.meta3_label')}</div>
            </div>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>
              <span data-i18n="hero.cta_primary">{t('hero.cta_primary')}</span>
              <Icon name="arrowRight" size="md" />
            </a>
            <a href="#technology" className="btn-ghost" onClick={(e) => { e.preventDefault(); scrollTo('technology') }}>
              <Icon name="info" size="md" />
              <span data-i18n="hero.cta_secondary">{t('hero.cta_secondary')}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
