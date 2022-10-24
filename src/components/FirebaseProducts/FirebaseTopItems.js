import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { productsCollectionRef } from '../../lib/firestoreCollections';


const FirebaseTopItems = () => {
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
    <div>
        {items.map(item =>(
            <div key={item.id}>
                <img src={item.data.imageUrl} alt="product" />
                <h1>{item.data.name}</h1>
                <h2>{item.data.desc}</h2>
                <h3>{item.data.currentPrice}</h3>
                <h4>{item.data.prevPrice}</h4>
                <h5>{item.data.rating}</h5>
                <img src={item.data.imageUrl} alt="product" />
            </div>
        ))}
    </div>
  )
}

export default FirebaseTopItems