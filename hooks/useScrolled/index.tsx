import { useCallback, useEffect, useState } from 'react'
import { debounce } from 'ts-debounce'

const isWindowScrolled = () => (typeof window === 'undefined' ? false : window.scrollY > 16)

export const useScrolled = () => {
  const [scrolled, setScrolled] = useState(isWindowScrolled())

  const onScroll = useCallback(
    debounce(() => {
      setScrolled(isWindowScrolled())
    }, 50),
    [],
  )

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return scrolled
}
