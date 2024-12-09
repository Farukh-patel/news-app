import React from 'react'
import loader from '../LOADER.gif'

const Loader =()=> {

    return (
      <div className='text-center'>
        <img src={loader} style={{height:"50px"}} alt='loader'/>
      </div>
    )
  }


export default Loader