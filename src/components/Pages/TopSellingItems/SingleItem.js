import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, withRouter } from "react-router";

const SingleItem = () => {
    const params= useParams()

    const[items, setItems]= useState([]);

    useEffect(()=>{
        async function fetchData(){
            const res = await axios(`/item/${params.name}`);
            console.log(res.data);
            setItems(res.data);
        }
            fetchData()
    }, [])
  return (
    <div>
        <h1>{items.name}</h1>
        <img src={items.image} alt={items.name} />

        Purchace your order
    </div>
  )
}

export default SingleItem