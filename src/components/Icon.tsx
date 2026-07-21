import type { SVGProps } from 'react'

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string
  size?: IconSize
}

const ICONS: Record<string, React.FC<{ className?: string }>> = {
  arrowRight: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  info: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  star: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
    </svg>
  ),
  eye: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  shieldCheck: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  syringe: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" />
    </svg>
  ),
  check: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  ),
  eye2: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  history: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 9-9" />
      <path d="M3 4v5h5" />
      <path d="M21 12a9 9 0 1 0-9 9" />
    </svg>
  ),
  activity: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3 12h4l3-9 4 18 3-9h4" />
    </svg>
  ),
  chevronDown: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M6 9L12 15 18 9" />
    </svg>
  ),
  fileText: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <polyline points="16 13 8 13 8 21" />
    </svg>
  ),
  plus: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  phone: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.18 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.05.38 2.08.74 3.07a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.01-1.49a2 2 0 0 1 2.11-.45c.99.36 2.02.61 3.07.74a2 2 0 0 1 1.72 2v3z" />
    </svg>
  ),
  mapPin: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  message: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  whatsapp: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3 21l1.7-4.7a8.5 8.5 0 1 1 3.7 3.7L3 21z" />
      <path d="M9 9c0-.6.4-1 1-1h1c.3 0 .6.2.7.5l.5 1.5c.1.3 0 .6-.2.8L11 11.5c.5 1 1.3 1.8 2.3 2.3l.7-1c.2-.2.5-.3.8-.2l1.5.5c.3.1.5.4.5.7v1c0 .6-.4 1-1 1h-1A6 6 0 0 1 9 10V9z" />
    </svg>
  ),
  send: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M21.5 4.5L2.5 12l5 2 2 6 3.5-4 5.5 4 3-15.5z" />
      <path d="M7.5 14l5-3" />
    </svg>
  ),
}

const sizeClass: Record<IconSize, string> = {
  xs: 'ic-xs',
  sm: 'ic-sm',
  md: 'ic-md',
  lg: 'ic-lg',
  xl: 'ic-xl',
}

export function Icon({ name, size = 'md', className = '', ...rest }: IconProps) {
  const Svg = ICONS[name]
  if (!Svg) {
    console.warn(`Icon "${name}" not found`)
    return null
  }
  const cls = `ic ${sizeClass[size]} ${className}`.trim()
  return <Svg className={cls} aria-hidden="true" {...rest} />
}
