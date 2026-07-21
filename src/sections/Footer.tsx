import { useLang } from '../i18n/LangContext'
import { Icon } from '../components/Icon'

export function Footer() {
  const { t } = useLang()
  return (
    <footer>
      <div className="wrap">
        <div className="foot-main-grid">
          <div className="foot-col foot-col-contacts">
            <h4>{t('footer.contacts')}</h4>
            <div className="foot-contact-row">
              <Icon name="mapPin" size="sm" />
              <span>Clean View Clinic, Санкт-Петербург,<br/>ул. Молдагуловой, д. 7/6</span>
            </div>
          </div>
        </div>
        <div className="foot-disclaimer">
          <p>{t('footer.disclaimer')}</p>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  )
}