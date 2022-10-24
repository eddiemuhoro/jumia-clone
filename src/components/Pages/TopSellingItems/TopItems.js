import { NavigateNext } from '@material-ui/icons'
import axios from 'axios'
import { onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { productsCollectionRef } from '../../../lib/firestoreCollections'
import './top.css'
const TopItems = () => {

  
        const [items, setItems] = useState([]);
        useEffect(()=>{
            const unSubscribe= onSnapshot(productsCollectionRef, snapshot=>{
                setItems(snapshot.docs.map(doc=> ({id:doc.id, data: doc.data()})))
            })
            return ()=>{
                unSubscribe()
            }
        }, [])

  return (
    <div className='topSellingItemsContainer'>
        <div className='topItemsTitle'>

            <h5>Top Selling Items</h5>
            <div className='seeAll'>
                <NavLink to='/topsellingitems'><p>See all</p></NavLink>
               
               <NavigateNext/>
            </div>
            
        </div>
        <div className='topImages'>
                {items.map((item )=>(
                    <NavLink to={`/topSellingItems/`+ item.id} key={item.id} className=''>
                        <div key={item.id} className=' topSelling'>
                                <img src={item.data.imageUrl} alt={item.data.name}/>                            
                                <h4>{item.data.name}</h4>
                                <h5>Ksh {item.data.currentPrice}</h5>
                                <p>Ksh {item.data.prevPrice}</p>
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

