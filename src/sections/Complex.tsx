import { useLang } from '../i18n/LangContext'
import { Icon } from '../components/Icon'

const ITEMS = [
  { icon: 'eye2', titleKey: 'complex.1.title', descKey: 'complex.1.desc' },
  { icon: 'history', titleKey: 'complex.2.title', descKey: 'complex.2.desc' },
  { icon: 'activity', titleKey: 'complex.3.title', descKey: 'complex.3.desc' },
]

export function Complex() {
  const { t } = useLang()
  return (
    <section className="complex" id="complex">
      <div className="wrap">
        <div className="section-head">
          <h2 data-i18n="complex.title">{t('complex.title')}</h2>
          <p data-i18n="complex.subtitle">{t('complex.subtitle')}</p>
        </div>
        <div className="complex-grid">
          {ITEMS.map((item, idx) => (
            <div className="complex-item" key={idx}>
              <div className="complex-icon">
                <Icon name={item.icon} size="lg" />
              </div>
              <h3 data-i18n={item.titleKey}>{t(item.titleKey)}</h3>
              <p data-i18n={item.descKey}>{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
