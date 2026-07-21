import { useLang } from '../i18n/LangContext'
import { Icon } from '../components/Icon'

export function CTA() {
  const { t } = useLang()
  return (
    <section className="cta" id="contact" style={{ background: 'var(--bg-2)' }}>
      <div className="wrap">
        <h2 data-i18n="cta.title">{t('cta.title')}</h2>
        <p data-i18n="cta.subtitle">{t('cta.subtitle')}</p>
        <div className="cta-actions">
          <a
            href="https://wa.me/79318889990"
            target="_blank"
            rel="noopener"
            className="cta-messenger cta-wa"
          >
            <Icon name="whatsapp" size="md" />
            <span data-i18n="cta.btn_wa">{t('cta.btn_wa')}</span>
          </a>
          <a
            href="https://max.ru/eduard_starunov"
            target="_blank"
            rel="noopener"
            className="cta-messenger cta-max"
          >
            <Icon name="send" size="md" />
            <span data-i18n="cta.btn_max">{t('cta.btn_max')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}