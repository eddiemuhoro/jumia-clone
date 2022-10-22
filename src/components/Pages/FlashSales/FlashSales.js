import { FlashAuto, FlashOn, NavigateNext } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Timer from './CountDown/CountDown'
import './flash.css'
const FlashSales = () => {
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   axios.request("https://fakestoreapi.com/products").then(function(responce){
  //       console.log(responce.data)
  //       setItems(responce.data)
  //   }).catch(function(error){
  //       console.log(error)
  //   })
  // }, []);

  const items=[
    {
        image:require('../TopSellingItems/TopSellingImages/lenovo.jpg'),
        title:'Lenovo Laptop',
        price: 'Ksh 12,400',
        undiscountedPrice: 'Ksh 15,000',
        id:1

    },
    {
        image:require('../TopSellingItems/TopSellingImages/tecno.jpg'),
        title:'Tecno Camon 16',
        price: 'Ksh 20,300',
        undiscountedPrice: 'Ksh 22,340',
        id:2
    },
    {
        image:require('../TopSellingItems/TopSellingImages/redmi.jpg'),
        title:'Redmi 9A',
        price:'Ksh 16,400',
        undiscountedPrice: 'Ksh 18,230',
        id:3
    },
    {
        image:require('../TopSellingItems/TopSellingImages/sumsang.jpg'),
        title:'Samsung Galaxy A12',
        price: 'Ksh 23,300',
        undiscountedPrice: 'Ksh 25,620',
        id:4
    },
    {
        image:require('../TopSellingItems/TopSellingImages/dstv.jpg'),
        title:'DSTV',
        price: 'Ksh 3,000',
        undiscountedPrice: 'Ksh 3,500',
        id:5
    
    },
    {
        image:require('../TopSellingItems/TopSellingImages/nexus.jpg'),
        title:'Nexus Kettle',
        price: 'Ksh 4,400',
        undiscountedPrice: 'Ksh 5,600',
        id:6
    }
]
  return (
    <div>
        <div className='flashTop'>
            <div className='flash-title'>

                <FlashOn />
                <div>
                    <div className='flashTitle'><h5>FLASH SALES </h5></div>
                    <div className='flashCountDown'><h5>Time Left:</h5><Timer/></div>
                </div>
            </div>
              <div className='seeAll'><p>SEE ALL </p> <NavigateNext/></div>
         

        </div>
        <div className='topImages'>
                {items.map((item )=>(
                  <Link to ={'/flash/'+ item.title}>
                        <div key={item.id} className=' topSelling'>
                            <img src={item.image} alt={item.title}/>
                            <h4>{item.title}</h4>
                            <h5>{item.price}</h5>
                            <p>{item.undiscountedPrice}</p>
                            <div className='percentageDiscount'>
                            <p >-12%</p>
                            </div>
                        </div>
                  </Link>
                ))}
        </div>
    </div>
  )
}

export default FlashSales