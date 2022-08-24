import React, { Component } from 'react'
import loader from './loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-2'>
        <img src={loader} alt="" />
      </div>
    )
  }
}

export default Spinner
