import { useLang } from '../i18n/LangContext'
import { Icon } from '../components/Icon'

const FEATURES = [
  { icon: 'eye', titleKey: 'features.1.title', descKey: 'features.1.desc' },
  { icon: 'shieldCheck', titleKey: 'features.2.title', descKey: 'features.2.desc' },
  { icon: 'syringe', titleKey: 'features.3.title', descKey: 'features.3.desc' },
]

export function Features() {
  const { t } = useLang()
  return (
    <section>
      <div className="wrap">
        <div className="section-head center">
          <h2 data-i18n="features.title">{t('features.title')}</h2>
          <p data-i18n="features.subtitle">{t('features.subtitle')}</p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, idx) => (
            <div className="feature" key={idx}>
              <div className="feature-icon">
                <Icon name={f.icon} size="xl" />
              </div>
              <h3 data-i18n={f.titleKey}>{t(f.titleKey)}</h3>
              <p data-i18n={f.descKey}>{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
