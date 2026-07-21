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
            <div className="foot-messengers">
              <a
                href="https://wa.me/79318889990"
                target="_blank"
                rel="noopener"
                className="foot-msg-link"
              >
                <Icon name="whatsapp" size="sm" />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://max.ru/eduard_starunov"
                target="_blank"
                rel="noopener"
                className="foot-msg-link"
              >
                <Icon name="send" size="sm" />
                <span>Max Messenger</span>
              </a>
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