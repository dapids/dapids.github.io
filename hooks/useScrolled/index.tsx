import { useScrollPositionY } from 'hooks/useScrollPositionY'

export const useScrolled = () => {
  const scrollPositionY = useScrollPositionY()

  return scrollPositionY > 16
}
