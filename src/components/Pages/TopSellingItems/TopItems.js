import { NavigateNext } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './top.css'
const TopItems = () => {
const [items, setItems]= useState([])
useEffect(() => {
    axios.request("https://mighty-shelf-04623.herokuapp.com/item").then(function(responce){
        console.log(responce.data)
        setItems(responce.data)
    }).catch(function(error){
        console.log(error)
    })
  }, []);



//   const items=[
//     {
//         image:require('./TopSellingImages/lenovo.jpg'),
//         title:'Lenovo Laptop',
//         price: 'Ksh 12,400',
//         undiscountedPrice: 'Ksh 15,000',
//         id:1

//     },
//     {
//         image:require('./TopSellingImages/tecno.jpg'),
//         title:'Tecno Camon 16',
//         price: 'Ksh 20,300',
//         undiscountedPrice: 'Ksh 22,340',
//         id:2
//     },
//     {
//         image:require('./TopSellingImages/redmi.jpg'),
//         title:'Redmi 9A',
//         price:'Ksh 16,400',
//         undiscountedPrice: 'Ksh 18,230',
//         id:3
//     },
//     {
//         image:require('./TopSellingImages/sumsang.jpg'),
//         title:'Samsung Galaxy A12',
//         price: 'Ksh 23,300',
//         undiscountedPrice: 'Ksh 25,620',
//         id:4
//     },
//     {
//         image:require('./TopSellingImages/dstv.jpg'),
//         title:'DSTV',
//         price: 'Ksh 3,000',
//         undiscountedPrice: 'Ksh 3,500',
//         id:5
    
//     },
//     {
//         image:require('./TopSellingImages/nexus.jpg'),
//         title:'Nexus Kettle',
//         price: 'Ksh 4,400',
//         undiscountedPrice: 'Ksh 5,600',
//         id:6
//     }
// ]
  return (
    <div className='topSellingItemsContainer'>
        <div className='topItemsTitle'>

            <h5>Top Selling Items</h5>
            <div className='seeAll'>
               <p>See all</p>
               <NavigateNext/>
            </div>
            
        </div>
        <div className='topImages'>
                {items.map((item )=>(
                    <NavLink to={`/item/`+ item.name} key={item.id} className=''>
                        <div key={item.id} className=' topSelling'>
                            <img src={item.image} alt={item.title}/>
                            
                            <h4>{item.name}</h4>
                            <h5>{item.previousPrice}</h5>
                            <p>{item.id}</p>
                            {console.log(item.id)}
                            {console.log(item.name)}
                            <div className='percentageDiscount'>
                            <p>-12%</p>
                            </div>
                        </div>
                    </NavLink>

                ))}
        </div>
    </div>
  )
}

export default TopItems