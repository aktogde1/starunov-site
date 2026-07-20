import { useState } from 'react'
import { useLang } from '../i18n/LangContext'
import { Icon } from '../components/Icon'

const CERTS = [
  { id: 'cert-1', titleKey: 'certs.1.title', descKey: 'certs.1.desc', img: '/images/certs/cert-01.jpg', type: 'Диплом', institution: 'Иркутский государственный медицинский институт', year: '1987', pdf: 'documents/diplom-vracha.pdf' },
  { id: 'cert-2', titleKey: 'certs.2.title', descKey: 'certs.2.desc', img: '/images/certs/cert-02.jpg', type: 'Ординатура', institution: 'Иркутский государственный медицинский институт', years: '1987–1989', pdf: 'documents/ordinatura.pdf' },
  { id: 'cert-3', titleKey: 'certs.3.title', descKey: 'certs.3.desc', img: '/images/certs/cert-03.jpg', type: 'Переподготовка', program: '«Организация здравоохранения»', year: '2019', pdf: 'documents/diplom-pp.pdf' },
  { id: 'cert-4', titleKey: 'certs.4.title', descKey: 'certs.4.desc', img: '/images/certs/cert-04.jpg', type: 'Сертификат специалиста', specialty: 'Здравоохранение', year: '2019', pdf: 'documents/sert-zdrav.pdf' },
  { id: 'cert-5', titleKey: 'certs.5.title', descKey: 'certs.5.desc', img: '/images/certs/cert-05.jpg', type: 'Сертификат специалиста', specialty: 'Офтальмология', year: '2019', pdf: 'documents/sert-oftalmo.pdf' },
  { id: 'cert-6', titleKey: 'certs.6.title', descKey: 'certs.6.desc', img: '/images/certs/cert-06.jpg', type: 'Удостоверение ДПО', program: 'Лазерная хирургия', year: '2017', pdf: 'documents/udostoverenie-dpo.pdf' },
]

export function Certificates() {
  const { t } = useLang()
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section style={{ background: 'var(--bg-2)' }} id="certificates">
      <div className="wrap">
        <div className="section-head center">
          <h2 data-i18n="certs.title">{t('certs.title')}</h2>
          <p data-i18n="certs.subtitle">{t('certs.subtitle')}</p>
        </div>
        <div className="cert-group-items">
          {CERTS.map((cert) => (
            <div className={`cert-g-item${open === cert.id ? ' open' : ''}`} key={cert.id}>
              <button
                className="cert-g-trigger"
                aria-expanded={open === cert.id}
                onClick={() => setOpen(open === cert.id ? null : cert.id)}
              >
                <span data-i18n={cert.titleKey}>{t(cert.titleKey)}</span>
                <span style={{ color: 'var(--text-dim)', fontSize: 12, fontWeight: 400 }} data-i18n={cert.descKey}>{t(cert.descKey)}</span>
                <svg className="ic chev" style={{ width: 18, height: 18 }} viewBox="0 0 24 24">
                  <polyline points={open === cert.id ? '6 15 12 9 18 15' : '6 9 12 15 18 9'} />
                </svg>
              </button>
              <div className="cert-g-content" id={cert.id} style={{ maxHeight: open === cert.id ? '600px' : '0px', overflow: 'hidden', transition: 'max-height .35s ease' }}>
                <div className="cert-g-inner">
                  <div className="cert-g-thumb">
                    <img src={cert.img} alt={t(cert.titleKey)} loading="lazy" />
                  </div>
                  <div className="cert-g-info">
                    <div className="cert-g-info-row">
                      <span className="cert-g-info-label" data-i18n="cert.type">{t('cert.type')}</span>
                      <span className="cert-g-info-val">{cert.type}</span>
                    </div>
                    {cert.institution && (
                      <div className="cert-g-info-row">
                        <span className="cert-g-info-label" data-i18n="cert.institution">{t('cert.institution')}</span>
                        <span className="cert-g-info-val">{cert.institution}</span>
                      </div>
                    )}
                    {cert.program && (
                      <div className="cert-g-info-row">
                        <span className="cert-g-info-label" data-i18n="cert.program">{t('cert.program')}</span>
                        <span className="cert-g-info-val">{cert.program}</span>
                      </div>
                    )}
                    {cert.specialty && (
                      <div className="cert-g-info-row">
                        <span className="cert-g-info-label" data-i18n="cert.specialty">{t('cert.specialty')}</span>
                        <span className="cert-g-info-val">{cert.specialty}</span>
                      </div>
                    )}
                    <div className="cert-g-info-row">
                      <span className="cert-g-info-label" data-i18n={cert.years ? 'cert.years' : 'cert.year'}>{t(cert.years ? 'cert.years' : 'cert.year')}</span>
                      <span className="cert-g-info-val">{cert.years || cert.year}</span>
                    </div>
                    <a href={cert.img} target="_blank" rel="noopener" className="cert-g-link">
                      <Icon name="fileText" size="sm" />
                      <span data-i18n="cert.openPdf">{t('cert.openPdf')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
