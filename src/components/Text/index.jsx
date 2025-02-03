import React, { Children } from 'react'
import "../../styles/Header/index.css";
const Text = ({children , className, }) => {
  return (
    <div>
      <p>
       {children}
      </p>
    </div>
  )
}

export default Text
