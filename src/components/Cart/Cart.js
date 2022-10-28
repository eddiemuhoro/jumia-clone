import { Button } from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import React from 'react'

const Cart = ({cartItems, onAdd}) => {
  return (
    
    <div className='cart-items'>
      <div className='cart-items-header'>
        <h1>Cart</h1>
      </div>
      {cartItems.length === 0 &&( <div className='cart-items-empty'>Cart is empty</div>)}
      <div>
        {cartItems.map((item)=>(
          <div className='cart-item'>
            <div className='cart-item-image'>
              <img src={item.imageUrl} alt={item.name}/>
            </div>
            <div>{item.name}</div>
            <Button onClick={onAdd(item)}><Add/></Button>
            <Button><Remove/></Button>


            </div>
        ))}
      </div>
    </div>
        
  )
}

export default Cart