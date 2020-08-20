import React, { useEffect } from 'react'
import MoopsBackgroundImg from '../images/MoopsBackground.png'
import useWindowSize from '../hooks/useWindowSize'
const MoopsBackground = () => {
  const { width, height } = useWindowSize()
  useEffect(() => {
    console.log(width, height)
  }, [])
  return <img src={MoopsBackgroundImg} />
}

export default MoopsBackground
