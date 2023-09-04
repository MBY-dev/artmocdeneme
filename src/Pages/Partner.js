import React from 'react'
import './Partner.css'
import Marglo from '../Assets/PartnerBar/MARGLO.png'
import CAG from '../Assets/PartnerBar/CAG.png'
import DEDEW from '../Assets/PartnerBar/DEDEW.png'

const Partner = () => {
  return (
    <div className='renk-kontrol'>
    <div className='container-partner'>
        <div className='partner-icon'>
            <img src={Marglo} /> 
        </div>
        <div className='partner-icon'>
        <img src={CAG} /> 
        </div>
        <div className='partner-icon'>
        <img src={DEDEW} /> 
        </div>   
      </div>
    </div>
  )
}

export default Partner