import { useEffect, useState } from 'react'
import { Container } from './styles'

const SCROLLTHRESHOLD = 300

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined
  }
}

export function SideMenu({ children }: any) {
  const [ scrollY, setScrollY ] = useState<Number>(0)
  const [ isActive, setIsActive ] = useState<Boolean>(false)

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY)
      setIsActive(false)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollY])

  const classes = [
    isActive ? 'open' : '',
    scrollY <= SCROLLTHRESHOLD ? 'scrollOpen' : ''
  ]

  const className = classes.join(' ').trim()

  function toggleActiveMenu() {
    setIsActive(!isActive)
  }

  window.toggleActiveMenu = toggleActiveMenu

  return (
    <Container className={className}>
      { children }
    </Container>
  )
}