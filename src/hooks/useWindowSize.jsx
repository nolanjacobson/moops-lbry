import React, { useState, useEffect } from 'react'

const useWindowSize = () => {
  const isWindowClient = typeof window === 'object'

  const [windowSize, setWindowSize] = useState({
    width: isWindowClient ? window.innerWidth : undefined,
    height: isWindowClient ? window.innerHeight : undefined,
  })
  //☝️

  return windowSize
}

export default useWindowSize
