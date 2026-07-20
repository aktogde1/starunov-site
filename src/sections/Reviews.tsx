import { useState, useRef, useEffect } from 'react'
import { useLang } from '../i18n/LangContext'
import { PLATFORMS, REVIEWS, TOTAL_RATING, TOTAL_REVIEWS } from '../data/reviews'

const PLATFORM_COLORS: Record<string, string> = {
  'ПроДокторов': '#f1720b',
  'НаПоправку': '#00b04a',
  'ZOON': '#7b2cbf',
  'Красота и Медицина': '#e83e8c',
  'LeNotzyv': '#2b9aa8',
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="stars" aria-label={`${rating} из 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} className="ic star" viewBox="0 0 24 24" style={{ width: 16, height: 16, color: n <= rating ? 'var(--star-fill)' : 'var(--star-empty)' }}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" />
        </svg>
      ))}
    </span>
  )
}

function Avatar({ name }: { name: string }) {
  const initials = name.charAt(0).toUpperCase()
  return (
    <div className="review-avatar" aria-hidden="true">
      {initials}
    </div>
  )
}

export function Reviews() {
  const { t } = useLang()
  const [activeTab, setActiveTab] = useState('all')
  const [scrollIdx, setScrollIdx] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const filtered = activeTab === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => {
        const platform = PLATFORMS.find((p) => p.id === activeTab)
        return platform && r.platform === platform.name
      })

  const VISIBLE = 3
  const maxScroll = Math.max(0, filtered.length - VISIBLE)

  useEffect(() => {
    setScrollIdx(0)
  }, [activeTab])

  const scrollLeft = () => setScrollIdx((i) => Math.max(0, i - 1))
  const scrollRight = () => setScrollIdx((i) => Math.min(maxScroll, i + 1))

  const progress = maxScroll > 0 ? (scrollIdx / maxScroll) * 100 : 100
  const expanded = useRef<Set<number>>(new Set())
  const [toggle, setToggle] = useState(0)

  const isExpanded = (idx: number) => expanded.current.has(idx)
  const toggleExpand = (idx: number) => {
    if (expanded.current.has(idx)) expanded.current.delete(idx)
    else expanded.current.add(idx)
    setToggle((n) => n + 1)
  }

  return (
    <section className="reviews-shilova" id="reviews">
      <div className="wrap">
        <div className="section-head center">
          <h2 data-i18n="reviews.title">{t('reviews.title')}</h2>
          <p data-i18n="reviews.subtitle">{t('reviews.subtitle')}</p>
        </div>

        {/* Platform tabs */}
        <div className="rev-tabs">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              className={`rev-tab${activeTab === p.id ? ' active' : ''}`}
              onClick={() => setActiveTab(p.id)}
            >
              <span className="rev-tab-name">{p.name}</span>
              <span className="rev-tab-rating">{p.rating}</span>
            </button>
          ))}
        </div>

        {/* Summary rating */}
        <div className="rev-summary">
          <div className="rev-summary-left">
            <span className="rev-summary-score">{TOTAL_RATING}</span>
            <span className="rev-summary-outof">из 5</span>
            <Stars rating={Math.round(parseFloat(TOTAL_RATING))} />
            <span className="rev-summary-count">На основе {TOTAL_REVIEWS} оценок</span>
          </div>
          <a
            href="https://prodoctorov.ru/moskva/vrach/850605-starunov/"
            target="_blank"
            rel="noopener"
            className="btn-ghost rev-leave-btn"
          >
            Оставить отзыв
          </a>
        </div>

        {/* Cards */}
        <div className="rev-cards-viewport">
          <div
            className="rev-cards-track"
            ref={scrollRef}
            style={{
              transform: `translateX(-${scrollIdx * (100 / VISIBLE)}%)`,
            }}
          >
            {filtered.map((r, idx) => {
              const expandedRow = isExpanded(idx)
              const color = PLATFORM_COLORS[r.platform] || 'var(--accent)'
              return (
                <div className="rev-card" key={`${activeTab}-${idx}`}>
                  <div className="rev-card-head">
                    <Avatar name={r.author} />
                    <div className="rev-card-meta">
                      <div className="rev-card-name">{r.author}</div>
                      <Stars rating={r.rating} />
                      <div className="rev-card-date">{r.date}</div>
                    </div>
                  </div>
                  <div
                    className="rev-card-text"
                    style={{
                      maxHeight: expandedRow ? '500px' : '4.5em',
                      overflow: 'hidden',
                      transition: 'max-height .3s ease',
                    }}
                  >
                    {r.text}
                  </div>
                  {r.text.length > 120 && (
                    <button
                      className="rev-card-expand"
                      onClick={() => toggleExpand(idx)}
                    >
                      {expandedRow ? 'Свернуть' : 'Читать полностью'}
                    </button>
                  )}
                  <a
                    href={r.platformUrl}
                    target="_blank"
                    rel="noopener"
                    className="rev-card-source"
                    style={{ color }}
                  >
                    Отзыв {r.platform}
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="rev-nav">
          <button
            className="rev-arrow"
            onClick={scrollLeft}
            disabled={scrollIdx === 0}
            aria-label="Назад"
          >
            <svg className="ic" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
              <polyline points="15 18 9 12 15 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="rev-progress">
            <div className="rev-progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <button
            className="rev-arrow"
            onClick={scrollRight}
            disabled={scrollIdx >= maxScroll}
            aria-label="Вперёд"
          >
            <svg className="ic" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
              <polyline points="9 18 15 12 9 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* View all */}
        <div className="rev-view-all">
          <a
            href="https://prodoctorov.ru/moskva/vrach/850605-starunov/"
            target="_blank"
            rel="noopener"
            className="btn-outline rev-view-all-btn"
          >
            Смотреть все отзывы
          </a>
        </div>
      </div>
    </section>
  )
}