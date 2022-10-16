import React, { useState } from 'react'
import ImageSlider from './ImageSlider'
import './adv.css'
import Radium, { StyleRoot } from 'radium'
import { Camera, Computer, FindInPageOutlined, FormatAlignRightRounded, Gamepad, HelpOutline, Laptop, NetworkWifiRounded, NextWeek, PhoneAndroid, Tablet, Watch } from '@material-ui/icons'
import Electronics from './CategoriesTypes/Electronics/Electronics'
import HomeAppliances from './CategoriesTypes/Home/HomeAppliances'

const Advert = () => {
    const slides=[
        {
            image:require('./Images/clothes.jpg'),
            title:'Clothes',
        },
        {
            image:require('./Images/tusker.jpg'),
            title:'tusker',
        },
        {
            image:require('./Images/laptop.jpg'),
            title:'laptop',
        },
        {
            image:require('./Images/phone.jpg'),
            title:'phone',
        },
        {
            image:require('./Images/fridge.jpg'),
            title:'fridge',
        }
    ]

    const [isHovered, setIsHovered] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)
    const [isHovered3, setIsHovered3] = useState(false)
    const [isHovered5, setIsHovered5] = useState(false)
    const [isHovered6, setIsHovered6] = useState(false)
    const [isHovered7, setIsHovered7] = useState(false)

   
      const hoverItem=(e)=>{
        setIsHovered(true)
      }

      const homeApp=()=>{
       setIsHovered2(true)
      }

      const computerTypes=()=>{
        setIsHovered3(true)
       }
       const tabletTypes=()=>{
        setIsHovered5(true)
         }
         const laptopTypes=()=>{
            setIsHovered6(true)
                }
        

  return (
    <div>
        <StyleRoot>
            <div className='advContainer'>

                    <div className='leftPart'>
                        <ul className='leftList'>
                            <li onMouseEnter={hoverItem} onMouseLeave={()=>setIsHovered(false)}><FindInPageOutlined/>Electronics</li>
                            <li onMouseEnter={homeApp} onMouseLeave={()=> setIsHovered2(false)}> <PhoneAndroid/>Phones</li>
                            <li onMouseEnter={computerTypes} onMouseLeave={()=> setIsHovered3(false)}><Computer/>Computers</li>
                            <li onMouseEnter={tabletTypes} onMouseLeave={()=> setIsHovered5(false)}><Tablet/>Tablets</li>
                            <li onMouseEnter={laptopTypes} onMouseLeave={()=> setIsHovered6(false)}><Laptop/>TVs</li>
                            <li onMouseEnter={laptopTypes} onMouseLeave={()=> setIsHovered6(false)}><FormatAlignRightRounded/>Home Appliances</li>
                            <li onMouseEnter={laptopTypes} onMouseLeave={()=> setIsHovered6(false)}><Watch/>Watches</li>
                            <li onMouseEnter={laptopTypes} onMouseLeave={()=> setIsHovered6(false)}><Camera/>Cameras</li>
                            <li onMouseEnter={laptopTypes} onMouseLeave={()=> setIsHovered6(false)}><Gamepad/>Video Games</li>
                        </ul>
                        <div onMouseOver={hoverItem} onMouseLeave={()=>setIsHovered(false)} className={`${isHovered ?'hoverItems' : 'hide-hoverItems'}`}>
                            <Electronics/>
                        </div>
                    </div>
                  
                    <div  className={`imageSliderStyles `}>
                        <ImageSlider slides={slides}/>
                        
                    </div>
                    <div className='rightPart'>
                        <div className='customerGuide'>
                            <HelpOutline className='helpIcon'/>
                            <div>
                                <h3>Help center</h3>
                                <p>Guide to customer care</p>
                            </div>
                        </div>
                        <div className='customerGuide'>
                            <HelpOutline className='helpIcon'/>
                            <div>
                                <h3>Help center</h3>
                                <p>Guide to customer care</p>
                            </div>
                        </div>
                        <div className='customerGuide'>
                            <HelpOutline className='helpIcon'/>
                            <div>
                                <h3>Help center</h3>
                                <p>Guide to customer care</p>
                            </div>
                        </div>
                    </div>
                        
                        <div onMouseEnter={homeApp} onMouseLeave={()=> setIsHovered2(false)} className={`${isHovered2 ?'hoverItems' : 'hide-hoverItems'}`}>
                          <HomeAppliances/>
                        </div>
                        <div onMouseEnter={computerTypes} onMouseLeave={()=> setIsHovered3(false)} className={`${isHovered3 ?'hoverItems' : 'hide-hoverItems'}`}>
                          <HomeAppliances/>
                        </div>
                        <div onMouseEnter={tabletTypes} onMouseLeave={()=> setIsHovered5(false)} className={`${isHovered5 ?'hoverItems' : 'hide-hoverItems'}`}>
                          <HomeAppliances/>
                        </div>
                        <div onMouseEnter={laptopTypes} onMouseLeave={()=> setIsHovered6(false)} className={`${isHovered6 ?'hoverItems' : 'hide-hoverItems'}`}>
                            <HomeAppliances/>
                        </div>
            </div>
        </StyleRoot>
    </div>
  )
}

export default Advert