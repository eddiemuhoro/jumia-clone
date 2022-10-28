import { Button } from '@material-ui/core';
import { NavigateNext, ShoppingCart } from '@material-ui/icons';
import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { topPicksCollectionRef } from '../../../lib/firestoreCollections';
import './fy.css'

const TopPicks = ({onAdd}) => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const unSubscribe= onSnapshot(topPicksCollectionRef, snapshot=>{
            setItems(snapshot.docs.map(doc=> ({id:doc.id, data: doc.data()})))
        })
        return ()=>{
            unSubscribe()
        }
    }, [])



 

    
  return (
      <div>
        
        
          <div className='topItemsTitle'>

              <h5>Top Picks For You</h5>
              <div className='seeAll'>
                  <NavLink to='/toppicks'><p>See all</p></NavLink>

                  <NavigateNext />
              </div>

          </div>

          <div className='topPicksCont'>
            {items.map((item )=>(
                       <div className='container-element'  key={item.id}>
                            <div className='singlePick '>
                            <Link to={`/toppicks/${item.id}`} className='linki'>
                                <img src={item.data.imageUrl} alt={item.data.name}/>    
                            </Link>                        
                                    <h4>{item.data.name}</h4>
                                    <div className='price'>
                                        <div>
                                            <h5>Ksh {item.data.currentPrice}</h5>
                                            <p>Ksh {item.data.prevPrice}</p>
                                        </div>

                                        <ShoppingCart onClick={onAdd} />

                                    </div>
                                <div className='percentageDiscount'>
                                    <p>{Math.floor((item.data.prevPrice-item.data.currentPrice)/ item.data.prevPrice * 100)}%</p>
                                </div>

                                {/* <Link to={`/toppicks/${item.id}`} className='linki'>

                                         <Button variant="contained" fullWidth className='addButton'>More details</Button>

                                 </Link> */}

                            </div>
                        </div>
                    ))}
          </div>
      </div>
  )
}



export default TopPicks