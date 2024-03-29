import { NavigateNext } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './top.css'
const Items = () => {
  const items=[
    {
        image:require('./TopSellingImages/lenovo.jpg'),
        title:'Lenovo Laptop',
        price: 'Ksh 12,400',
        undiscountedPrice: 'Ksh 15,000',
        id:1

    },
    {
        image:require('./TopSellingImages/tecno.jpg'),
        title:'Tecno Camon 16',
        price: 'Ksh 20,300',
        undiscountedPrice: 'Ksh 22,340',
        id:2
    },
    {
        image:require('./TopSellingImages/redmi.jpg'),
        title:'Redmi 9A',
        price:'Ksh 16,400',
        undiscountedPrice: 'Ksh 18,230',
        id:3
    },
    {
        image:require('./TopSellingImages/sumsang.jpg'),
        title:'Samsung Galaxy A12',
        price: 'Ksh 23,300',
        undiscountedPrice: 'Ksh 25,620',
        id:4
    },
    {
        image:require('./TopSellingImages/dstv.jpg'),
        title:'DSTV',
        price: 'Ksh 3,000',
        undiscountedPrice: 'Ksh 3,500',
        id:5
    
    },
    {
        image:require('./TopSellingImages/nexus.jpg'),
        title:'Nexus Kettle',
        price: 'Ksh 4,400',
        undiscountedPrice: 'Ksh 5,600',
        id:6
    }
]
  return (
    <div className='topSellingItemsContainer'>
        <div className='topItemsTitle'>

            <h5>Top Selling Items</h5>
            <div className='seeAll'>
               <p>See all</p>
               <NavigateNext/>
            </div>
            
        </div>
        <div className='categoryImages'>
                {items.map((item )=>(
                    <Link to={`/`} key={item.id} className=''>
                        <div key={item.id} className=' imageItem'>
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

export default Items