import { useEffect, useState } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() => matchMedia('(prefers-color-scheme:dark)').matches)
  const [a11y, setA11y] = useState(false)

  useEffect(() => {
    const mq = matchMedia('(prefers-color-scheme:dark)')
    const onChange = (e: MediaQueryListEvent) => setDark(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    document.documentElement.dataset.a11y = a11y ? 'on' : 'off'
  }, [dark, a11y])

  return { dark, a11y, setA11y }
}
