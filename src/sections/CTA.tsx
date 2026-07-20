import { useLang } from '../i18n/LangContext'

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
            className="foot-messenger whatsapp"
            style={{ fontSize: 16, justifyContent: 'center', minWidth: 240 }}
          >
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2}>
              <path d="M3 21l1.7-4.7a8.5 8.5 0 1 1 3.7 3.7L3 21z" />
              <path d="M9 9c0-.6.4-1 1-1h1c.3 0 .6.2.7.5l.5 1.5c.1.3 0 .6-.2.8L11 11.5c.5 1 1.3 1.8 2.3 2.3l.7-1c.2-.2.5-.3.8-.2l1.5.5c.3.1.5.4.5.7v1c0 .6-.4 1-1 1h-1A6 6 0 0 1 9 10V9z" />
            </svg>
            <span data-i18n="cta.btn_wa">{t('cta.btn_wa')}</span>
          </a>
          <a
            href="https://max.ru/eduard_starunov"
            target="_blank"
            rel="noopener"
            className="foot-messenger max"
            style={{ fontSize: 16, justifyContent: 'center', minWidth: 240 }}
          >
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth={2}>
              <path d="M21.5 4.5L2.5 12l5 2 2 6 3.5-4 5.5 4 3-15.5z" />
              <path d="M7.5 14l5-3" />
            </svg>
            <span data-i18n="cta.btn_max">{t('cta.btn_max')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
