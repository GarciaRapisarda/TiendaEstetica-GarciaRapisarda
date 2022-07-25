import React, { useEffect, useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import products from '../MockApi/products';

const Detail = () => {
    let params = useParams();
   

    useEffect(() => {
       console.log("recibiendo parametros : ", params.id);
       return () => {
        console.log("se va a eliminar el componente", params.id); }
    }, [params.id]);
  return (
    <div>
    
        Detail
    </div>
  )
}

export default Detail