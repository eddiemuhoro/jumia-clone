import React from 'react'
import {Link, useParams} from 'react-router-dom'
import Beauty from '../televisions/Beauty'
import Televisions from '../televisions/Televisions'
const SingleCategory = () => {
    const params = useParams()
    console.log(params.title);
    const items=[
        {
            image:require('./CategoryImages/Beauty.png'),
            title:'Beauty',
            id:10,
            component: <Beauty />,


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
const found = items.find(item => {
    return item.title === params.title
})
console.log("found", found);
  return (
    <div>
        {found && (
            <div>
                {found.component}
            </div>
        )}
    </div>
  )
}

export default SingleCategory