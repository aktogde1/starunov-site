import { useLang } from '../i18n/LangContext'
import { Icon } from '../components/Icon'

const OLD_ITEMS = ['compare.old.i1','compare.old.i2','compare.old.i3','compare.old.i4','compare.old.i5','compare.old.i6']
const NEW_ITEMS = ['compare.new.i1','compare.new.i2','compare.new.i3','compare.new.i4','compare.new.i5','compare.new.i6']

export function Technology() {
  const { t } = useLang()
  return (
    <>
      <section id="technology" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="section-head center">
            <h2 data-i18n="compare.title">{t('compare.title')}</h2>
            <p data-i18n="compare.subtitle">{t('compare.subtitle')}</p>
          </div>
          <div className="compare">
            <div className="compare-card">
              <h3 data-i18n="compare.old.title">{t('compare.old.title')}</h3>
              <p className="sub" data-i18n="compare.old.sub">{t('compare.old.sub')}</p>
              <ul className="compare-list">
                {OLD_ITEMS.map((k, i) => (
                  <li key={i}>
                    <Icon name="check" size="md" />
                    <span data-i18n={k}>{t(k)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="compare-card featured">
              <span className="compare-tag" data-i18n="compare.new.tag">{t('compare.new.tag')}</span>
              <h3 data-i18n="compare.new.title">{t('compare.new.title')}</h3>
              <p className="sub" data-i18n="compare.new.sub">{t('compare.new.sub')}</p>
              <ul className="compare-list">
                {NEW_ITEMS.map((k, i) => (
                  <li key={i}>
                    <Icon name="check" size="md" />
                    <span data-i18n={k}>{t(k)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="wrap">
          <div className="section-head">
            <h2 data-i18n="equip.title">{t('equip.title')}</h2>
            <p data-i18n="equip.subtitle">{t('equip.subtitle')}</p>
          </div>
          <div className="equip-card">
            <div className="equip-visual" style={{ background: '#0d2028' }}>
              <img src="/images/visumax.jpg" alt="VisuMax 800" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="equip-info">
              <h3>VisuMax 800</h3>
              <p data-i18n="equip.desc">{t('equip.desc')}</p>
              <div className="spec-tiles">
                {[
                  { numKey: 'equip.val1', lblKey: 'equip.spec1' },
                  { numKey: 'equip.val2', lblKey: 'equip.spec2' },
                  { numKey: 'equip.val3', lblKey: 'equip.spec3' },
                  { num: 'ZEISS', lblKey: 'equip.spec4' },
                ].map((tile, i) => (
                  <div className="spec-tile" key={i}>
                    <div className="num" data-i18n={tile.numKey}>{tile.num || t(tile.numKey || '')}</div>
                    <div className="lbl" data-i18n={tile.lblKey}>{t(tile.lblKey)}</div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-dim)', marginTop: 12 }} data-i18n="equip.ai">{t('equip.ai')}</p>
            </div>
          </div>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src="/images/eduard-visumax.jpg" alt={t('about.title')} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src="/images/operation-process.jpg" alt="Процесс операции" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
