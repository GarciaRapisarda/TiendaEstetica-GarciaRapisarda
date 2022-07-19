import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';
import products from '../products.json';
import ItemListContainer from './ItemListContainer';

const Home = () => {
    const [lista, setProducts] = useState([]);
    const getData = new Promise((resolve, reject) => {
        let afterPromises = true;
        // let afterPromises = false;
        setTimeout(() => {
            if (afterPromises) {
                resolve(products);
            } else {
                reject("Failed to get data");
            }
        }, 2000);
    });

    useEffect(() => {
        getData
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    return (
        <div>
            <ItemListContainer />
            <ItemList items={lista} />
        </div>
    )
}

export default Home