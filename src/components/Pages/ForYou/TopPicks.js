import { NavigateNext } from '@material-ui/icons';
import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { topPicksCollectionRef } from '../../../lib/firestoreCollections';
import './fy.css'

const TopPicks = () => {
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
                <Link to={`/toppicks/${item.id}`}>
                       <div className='container-element'>
                            <div key={item.id} className='singlePick '>
                                    <img src={item.data.imageUrl} alt={item.data.name}/>                            
                                    <h4>{item.data.name}</h4>
                                    <h5>Ksh {item.data.currentPrice}</h5>
                                    <p>Ksh {item.data.prevPrice}</p>
                                <div className='percentageDiscount'>
                                    <p>{Math.floor((item.data.prevPrice-item.data.currentPrice)/ item.data.prevPrice * 100)}%</p>
                                </div>
                            </div>
                        </div>
                </Link>
                    ))}
          </div>
      </div>
  )
}

export default TopPicks