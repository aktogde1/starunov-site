import { useLang } from '../i18n/LangContext'
import { Icon } from '../components/Icon'

type Plan = {
  featured: boolean
  tagKey?: string
  titleKey: string
  subKey: string
  priceKey: string
  items: string[]
}

const PLANS: Plan[] = [
  {
    featured: true,
    tagKey: 'pricing.tag',
    titleKey: 'pricing.1.title',
    subKey: 'pricing.1.sub',
    priceKey: 'price.val1',
    items: ['pricing.1.i1', 'pricing.1.i2', 'pricing.1.i3', 'pricing.1.i4'],
  },
  {
    featured: false,
    titleKey: 'pricing.2.title',
    subKey: 'pricing.2.sub',
    priceKey: 'price.val2',
    items: ['pricing.2.i1', 'pricing.2.i2', 'pricing.2.i3', 'pricing.2.i4'],
  },
  {
    featured: false,
    titleKey: 'pricing.3.title',
    subKey: 'pricing.3.sub',
    priceKey: 'price.val3',
    items: ['pricing.3.i1', 'pricing.3.i2', 'pricing.3.i3', 'pricing.3.i4'],
  },
]

export function Pricing() {
  const { t } = useLang()
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="section-head center">
          <h2 data-i18n="pricing.title">{t('pricing.title')}</h2>
          <p data-i18n="pricing.subtitle">{t('pricing.subtitle')}</p>
        </div>
        <div className="price-grid">
          {PLANS.map((plan, idx) => (
            <div className={`price-card ${plan.featured ? 'featured' : ''}`} key={idx}>
              {plan.featured && plan.tagKey && <span className="price-tag" data-i18n={plan.tagKey}>{t(plan.tagKey)}</span>}
              <h3 data-i18n={plan.titleKey}>{t(plan.titleKey)}</h3>
              <p className="price-sub" data-i18n={plan.subKey}>{t(plan.subKey)}</p>
              <div className="price-amount" data-i18n={plan.priceKey}>{t(plan.priceKey)}</div>
              <div className="price-unit" data-i18n="pricing.unit">{t('pricing.unit')}</div>
              <ul className="price-list">
                {plan.items.map((item, i) => (
                  <li key={i}>
                    <Icon name="check" size="sm" />
                    <span data-i18n={item}>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="price-note" data-i18n="pricing.note">{t('pricing.note')}</p>
      </div>
    </section>
  )
}
