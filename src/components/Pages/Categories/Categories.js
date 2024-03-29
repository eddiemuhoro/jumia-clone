import React from 'react'
import { Link } from 'react-router-dom'
import Televisions from '../televisions/Televisions'
import Beauty from '../televisions/Beauty'
import './categories.css'
const Categories = () => {
    const items=[
        {
            image:require('./CategoryImages/Beauty.png'),
            title:'Beauty',
            id:10,
            path: '/beauty',
            component: <Televisions />,
          

        },
        {
            image:require('./CategoryImages/MensFashion.png'),
            title:'Men Fashion',
            id:11,
            component: <Televisions />,
        },
        {
            image:require('./CategoryImages/WomensFashion.png'),
            title:'Women Fashion',
            id:12,
            component: <Televisions />,
        },
        {
            image:require('./CategoryImages/SmallAppliances.png'),
            title:'Appliances',
            id:13,
            component: <Televisions />,
        },
        {
            image:require('./CategoryImages/Supermarket.png'),
            title:'SuperMarket',
            id:14,
            component: <Televisions />,        
        },
        {
            image:require('./CategoryImages/Televisions.png'),
            title:'Televisions',
            id:15,
            component: <Televisions />,
            path: '/televisions'
            
        }
    ]
  return (
    <div>
        <div className='categoryImages'>
            {items.map((item)=>(
            <Link to={'/categories/'+item.title} key={item.id} className='categoryImage'>
                <div key={item.id} className='imageItem'>
                    <img src={item.image} alt={item.title}/>
                    <h5>{item.title}</h5>
                    {/* {item.component} */}
                </div>
            </Link>))}
        </div>      
    </div>
  )
}

export default Categories