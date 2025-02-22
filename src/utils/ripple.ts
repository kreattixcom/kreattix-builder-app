import styles from '../components/button/button.module.scss'

export const ripple = (event: React.MouseEvent) => {
  const target = event.currentTarget
  const rect = target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const size = Math.max(rect.width, rect.height)
  const ripple = document.createElement('span')
  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${x - size / 2}px`
  ripple.style.top = `${y - size / 2}px`
  ripple.classList.add(styles.ripple)
  target.appendChild(ripple)
  setTimeout(() => target.removeChild(ripple), 700)
}
