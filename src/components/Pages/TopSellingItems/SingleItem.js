import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, withRouter } from "react-router";

const SingleItem = () => {
    const params= useParams()

    const[items, setItems]= useState([]);

    useEffect(() => {
        axios.request(`/${params.previousPrice}`, { validateStatus: false }).then(function(responce){
            console.log(responce.data)
            setItems(responce.data)
        }).catch(function(error){
            console.log(error)
        })
      }, []);
  return (
    <div>
        <h1>{items.name}</h1>
        <img src={items.image} alt={items.name} />

    </div>
  )
}

export default SingleItem