import { useCallback, useEffect, useState } from 'react'

function useKeyPress (targetKey: string, onKeyDown: () => void, onKeyUp: () => void): void {
  const downHandler = useCallback(({ key }: KeyboardEvent) => {
    if (key === targetKey) onKeyDown()
  }, [onKeyDown, targetKey])

  const upHandler = useCallback(({ key }: KeyboardEvent) => {
    if (key === targetKey) onKeyUp()
  }, [onKeyUp, targetKey])

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [downHandler, upHandler])
}

const useInterval = function (enabled: boolean, delay: number, callback: () => void): void {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (!enabled) return
    if (!timer) {
      setTimer(window.setTimeout(() => {
        callback()
        setTimer(0)
      }, delay))
    }
  }, [callback, delay, enabled, timer])
}

export { useInterval, useKeyPress }
