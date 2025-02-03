import React from 'react'

const Img = ({className,src ,alt="TestImage..."}) => {
  return (
    <img className={className} alt={alt} src={src}/>
  )
}

export default Img
