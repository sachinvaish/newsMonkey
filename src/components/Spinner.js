import React from 'react'
import loader from './loader.gif'

const Spinner=()=> {
    return (
      <div className='text-center my-2'>
        <img src={loader} alt="" />
      </div>
    )
}

export default Spinner
