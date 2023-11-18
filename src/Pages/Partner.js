import React from 'react'
import './Partner.css'
import Marglo from '../Assets/PartnerBar/MARGLO.png'
import CAG from '../Assets/PartnerBar/CAG.png'
import DEDEW from '../Assets/PartnerBar/DEDEW.png'

const Partner = () => {
  return (

      
    <div className='container-partner'>
        <div className='partner-icon'>
          <a href="httpps://marglo.co/">
            <img src={Marglo} /> 
            </a>
        </div>
        <div className='partner-icon'>
          <a href="https://dedew.io/" target='_blank'>
        <img src={DEDEW} /> 
        </a>
        </div>   
      </div>
 
  )
}

export default Partner