import { Icon } from '../components/Icon'

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-main-grid">
          <div className="foot-col foot-col-contacts">
            <h4>Контакты</h4>
            <div className="foot-contact-row">
              <Icon name="mapPin" size="sm" />
              <span>Clean View Clinic, Санкт-Петербург,<br/>ул. Молдагуловой, д. 7/6</span>
            </div>
          </div>
        </div>
        <div className="foot-disclaimer">
          <p>
            Имеются противопоказания. Необходима консультация специалиста.
            Лицензия: [указать номер]
          </p>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Эдуард Старунов. Все права защищены.</span>
        </div>
      </div>
    </footer>
  )
}