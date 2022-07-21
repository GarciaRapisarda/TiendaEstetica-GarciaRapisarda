import React from 'react'
import ItemListContainer from './ItemListContainer'
import NavBar from './NavBar'
import { Link, Outlet } from 'react-router-dom'


const Home = () => {
    

    

  return (
    <div>
        <NavBar />
        <ItemListContainer greeting={"Tienda online"} />
        <Outlet />
    </div>
  )
}

export default Home