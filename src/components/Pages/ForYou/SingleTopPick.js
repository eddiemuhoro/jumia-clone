import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { topPicksCollectionRef } from '../../../lib/firestoreCollections';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useCart } from 'react-use-cart';
import Cart from '../../Cart/Cart';
const SingleTopPick = () => {


    const params = useParams();
    console.log("current params", params.id);
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const unSubscribe= onSnapshot(topPicksCollectionRef , snapshot=>{
            setItems(snapshot.docs.map(doc=> ({id:doc.id, data: doc.data()})))
        })
        return ()=>{
            unSubscribe()
        }
    }, [])

    const found= items.find(item=>{
        return item.id === params.id
      })
      

      //cart
      // const [cart, setCart] = useState([]);
    
      // console.log("found", found);
      // const handleClicked = (found)=>{
      //   const exist= cart.find(x=> x.id === found.id);
      //   if(exist){
      //     setCart(cart.map(x=> x.id === found.id ? {...exist, qty: exist.qty + 1} : x))
      //   }else{
      //     setCart([...cart, {...found, qty: 1}])
      //   }
      //   console.log(found.data);
      //   console.log(cart)
      // }

      // const onAdd=(found)=>{
      //   const exist = cart.find((x)=> x.id === found.id);
      //   if(exist){
      //     setCart(cart.map((x)=> x.id === found.id ? {...exist, qty: exist.qty + 1} : x))
      //   }else{
      //     setCart([...cart, {...found, qty: 1}])
      //   }
      // }
       
      
  return (
    <div>
         <div className='singleProduct'>

  {found && (
  
  <div className='container'>
      <div className='imageanAndDesc' >
            <div className='singleItemImage'>
                <img src={found.data.imageUrl} alt="product" />
                <hr/>
                <div>
                  <p>Share this product</p>

                </div>
            </div>

            
            <div className='productDesc'>
              <h1>{found.data.name}</h1>
              <h2>{found.data.desc}</h2>
              <hr></hr>
              <h1>Ksh {found.data.currentPrice}</h1>
              <div className='prevPriceSection'>
                <p className='prevP'>Ksh {found.data.prevPrice}</p>
                <span>{Math.floor((found.data.prevPrice-found.data.currentPrice)/found.data.prevPrice * 100)}%</span>
              </div>
              <Button variant="contained" fullWidth className='addButton' >
                    Add to cart
              </Button>
            </div>
        </div>

        <div className='deliveries'>
            <h2>Choose Location</h2>
            <select className='select'>
                <option value="Nairobi">Nairobi</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Kisumu">Kisumu</option>
                <option value="Nakuru">Nakuru</option>
                <option value="Eldoret">Eldoret</option>
            </select>
            <h4>Delivery Options</h4>
            <div className='deliveryOptions'>
              <div className='doorDelivery'>
                <h5>Door Delivery</h5>
                <p>Delivery within 24 hours</p>
                <p>Delivery KSh 250</p>
              </div>
              <div className='doorDelivery'>
                <h5>Pickup Station</h5>
                <p>Pickup by 27 October when you order within next 2hrs 24mins</p>
                <p>Delivery KSh 188</p>
              </div>
              <div className='doorDelivery'>
                <h5>Return Policy</h5>
                <p>Return within 7 days of delivery</p>
              </div>
            </div>

        </div>


      </div>
      
)}


  </div>
         

</div>
  )
}

export default SingleTopPick