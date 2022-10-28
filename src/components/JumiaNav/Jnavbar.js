import { Menu } from '@material-ui/core'
import { AccountBoxOutlined, AccountCircle, AccountCircleOutlined, BackupRounded, MenuBookSharp, MenuBookTwoTone, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './jumia.css'
const Jnavbar = () => {
  return (
    <div className='jnav-container'>
        <div className='jright'>
            <div className='jbar'><BackupRounded/></div>
            <div>Jumia✨</div>
        </div>
        
        <div className='jleft'>
            <div className='jsearch'>
                <input type='search' placeholder='search product' className='isearch'></input>
                <span><SearchOutlined/></span>
            </div>
            <div><Link to='/admin'  className='admin'> <AccountCircleOutlined /></Link></div>
            <div ><Link to = '/cart'><ShoppingCartOutlined/></Link></div>
        </div>
    </div>
  )
}

export default Jnavbar