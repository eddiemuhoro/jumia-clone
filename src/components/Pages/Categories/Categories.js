import React from 'react'
import './categories.css'
const Categories = () => {
    const items=[
        {
            image:require('./CategoryImages/Beauty.png'),
            title:'Beauty',
            id:10

        },
        {
            image:require('./CategoryImages/MensFashion.png'),
            title:'Men Fashion',
            id:11
        },
        {
            image:require('./CategoryImages/WomensFashion.png'),
            title:'Women Fashion',
            id:12
        },
        {
            image:require('./CategoryImages/SmallAppliances.png'),
            title:'Appliances',
            id:13
        },
        {
            image:require('./CategoryImages/Supermarket.png'),
            title:'SuperMarket',
            id:14
        
        },
        {
            image:require('./CategoryImages/Televisions.png'),
            title:'Televisions',
            id:15
        }
    ]
  return (
    <div>
        <div className='categoryImages'>
            {items.map((item)=>(
            <div key={item.id} className='imageItem'>
                <img src={item.image} alt={item.title}/>
                <h5>{item.title}</h5>
            </div>))}
        </div>      
    </div>
  )
}

export default Categories