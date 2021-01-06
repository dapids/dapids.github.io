import { useCallback, useEffect, useState } from 'react'
import { debounce } from 'ts-debounce'

const isWindowScrolled = () => (typeof window === 'undefined' ? 0 : window.scrollY)

export const useScrollPositionY = () => {
  const [scrollPositionY, setScrollPositionY] = useState(isWindowScrolled())

  const onScroll = useCallback(
    debounce(() => {
      setScrollPositionY(isWindowScrolled())
    }, 50),
    [],
  )

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return scrollPositionY
}
