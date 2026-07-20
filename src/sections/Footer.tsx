import { Icon } from '../components/Icon'

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-main-grid">
          <div className="foot-col foot-col-contacts">
            <h4>Контакты</h4>
            <div className="foot-contact-row">
              <Icon name="phone" size="sm" style={{ stroke: 'currentColor', fill: 'none' }} />
              <a href="tel:+79318889990">+7 (931) 888-99-90</a>
            </div>
            <div className="foot-contact-row">
              <Icon name="mapPin" size="sm" style={{ stroke: 'currentColor', fill: 'none' }} />
              <span>Clean View Clinic, г. Санкт-Петербург, ул. Молдагуловой, д. 7/6</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
