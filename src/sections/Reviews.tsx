import { useLang } from '../i18n/LangContext'
import { Icon } from '../components/Icon'

const REVIEWS = [
  { name: 'Александр Петрович', city: 'г. Санкт-Петербург', text: '«Со школы был минус, потом добавился астигматизм. Годы в очках и линзах. Решился на SMILE PRO у Эдуарда Вадимовича — и не пожалел ни секунды. Сама операция — 8 секунд на глаз, даже испугаться не успел. На следующий день уже видел 100%. Никакой боли, никакого дискомфорта. Спасибо доктору за золотые руки!»' },
  { name: 'Елена Сергеевна', city: 'г. Санкт-Петербург', text: '«Очень долго решалась — боялась до ужаса. В трёх клиниках сказали «тонкая роговица, не берёмся». Эдуард Вадимович посмотрел, сказал — сделаем SMILE PRO. Объяснил каждый шаг, успокоил. Операция — 10 минут вместе с подготовкой. Восстановление — день, и я уже читала книгу без очков. Прошло полгода — зрение идеальное. Всем рекомендую.»' },
  { name: 'Михаил Иванович', city: 'г. Санкт-Петербург', text: '«−9 на оба глаза, астигматизм. Думал — только очки на всю жизнь. После диагностики Эдуард Вадимович предложил SMILE PRO. Честно сказал про риски, про восстановление, про ограничения. Никаких «впариваний» — только факты. Операция прошла идеально. Сейчас вижу без очков лучше, чем в них видел. 156 тысяч — лучшая инвестиция в себя.»' },
  { name: 'Ольга Викторовна', city: 'г. Санкт-Петербург', text: '«Пришла к Эдуарду Вадимовичу после неудачной коррекции в другой клинике — зрение упало обратно через 2 года. Он честно сказал: «докоррекция возможна, но нужна точная диагностика». Проверил всё на VisuMax 800, сделал повторную операцию. Сейчас прошло 8 месяцев — зрение стабильное, лучше чем было до первой операции. Огромная благодарность за профессионализм и честность.»' },
  { name: 'Дмитрий Андреевич', city: 'г. Санкт-Петербург', text: '«Я сам врач-офтальмолог, приехал на обучение к Эдуарду Вадимовичу. Увидел его работу изнутри — как он общается с пациентами, как ведёт операцию, как разбирает сложные случаи. Это высший пилотаж. После обучения провёл первые самостоятельные операции на VisuMax — всё получилось благодаря его методике. Рекомендую и как врача, и как наставника.»' },
]

export function Reviews() {
  const { t } = useLang()
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <div className="section-head center">
          <h2 data-i18n="reviews.title">{t('reviews.title')}</h2>
          <p data-i18n="reviews.subtitle">{t('reviews.subtitle')}</p>
        </div>
        <div className="review-grid">
          {REVIEWS.map((r, idx) => (
            <div className="review" key={idx}>
              <div className="review-head">
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-city">{r.city}</div>
                </div>
              </div>
              <div className="review-text">{r.text}</div>
            </div>
          ))}
        </div>
        <div className="review-link" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
          <a href="https://prodoctorov.ru/sankt-peterburg/vrach/850605-starunov/" target="_blank" rel="noopener" className="btn-ghost">
            <span data-i18n="reviews.link1">{t('reviews.link1')}</span>
            <Icon name="arrowRight" size="sm" />
          </a>
          <a href="https://napopravku.ru/sankt-peterburg/vrach/850605-starunov/" target="_blank" rel="noopener" className="btn-ghost">
            <span data-i18n="reviews.link2">{t('reviews.link2')}</span>
            <Icon name="arrowRight" size="sm" />
          </a>
        </div>
      </div>
    </section>
  )
}
