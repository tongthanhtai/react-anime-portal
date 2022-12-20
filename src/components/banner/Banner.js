import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import normal_banner from '../../assets/img/hero/hero-1.jpg'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import './Banner.css'

export const Banner = () => {
  return (
    <>
        <div className='banner'>
            <img className='hero_1' src={ normal_banner } alt='banner' />
            <div className='label'>
              Adventure
            </div>
            <div className='label_content'>
              <h2>Fate / Stay Night:<br /> Unlimited Blade Works</h2>
              <br />
              <p>After 30 days of travel across the world...</p>
                <span>watch now</span>
                <button type='button' className='label_arrow'>
                  <FontAwesomeIcon className='label_arrow_right' icon={ faChevronRight }></FontAwesomeIcon>
                </button>
            </div>
            
        </div>
        <button type='button' className='button_arrow_right'>
          <FontAwesomeIcon className='arrow_right' icon={ faChevronRight }></FontAwesomeIcon>
        </button>
        <button type='button' className='button_arrow_left'>
          <FontAwesomeIcon className='arrow_left' icon= { faChevronLeft }></FontAwesomeIcon>
        </button>
    </>
  )
}