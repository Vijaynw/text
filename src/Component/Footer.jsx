import React from 'react'

function Footer(props) {
  return (
    <>
    <div className='footer bg-black h-[200px]'> 
      <h4 className='brushCopy'> Copyright {props.year} </h4>
    </div>
    </>
  )
}

export default Footer
