import React from 'react'
import './Header.css'
import header_logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

export const Header = () => {
  return (
    <header >
        <div className='container'>
          <div>
            <img src={ header_logo } alt='logo' />
          </div>
          <div>
            <div className='menu'>
              <div className='homepage'><a href=''>HomePage</a></div>
              <div className='categories'><a href=''>Categories</a>
                <FontAwesomeIcon className='faCircleChevronDown' icon={ faCircleChevronDown }></FontAwesomeIcon>
                < ul className='menulist'>
                  <li>Categories</li>
                  <li>Anime Details</li>
                  <li>Anime Watching</li>
                  <li>Blog Details</li>
                  <li>Sign Up</li>
                  <li>Login</li>
                </ul>
              </div>
              <div className='blog'><a href=''>Our Blog</a></div>
              <div className='contacts'><a href=''>Contacts</a></div>
            </div>
          </div>
          <div className='icon'>
            <FontAwesomeIcon className='faMagnifyingGlass' icon={ faMagnifyingGlass }></FontAwesomeIcon>
            <FontAwesomeIcon icon={ faUser }></FontAwesomeIcon>
          </div>
        </div>
    </header>
  )
}
