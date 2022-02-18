import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import CircularProgress from '@mui/material/CircularProgress';


export default function ContainerItemDetail () {
    const [product, setProduct] = useState ([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams()

    const dataProducts = [{
        id: 1,
        name: 'Mate de Flor con bandeja',
        price: 1500,
        stock: 10,
        img:'../Assets/matebandejaflor.jpg',
        category: "mate y bandeja",
    },
    {
        id: 2,
        name: 'Mate de Hoja con bandeja',
        price: 1400,
        stock: 20,
        img: '../Assets/matebandejahoja.jpg',
        category: "mate y bandeja",
    },
    {
        id: 3,
        name: 'Mate de Buho',
        price: 800,
        stock: 30,
        img: '../Assets/matebuho.jpg',
        category: "mate",
    },
    {
        id: 4,
        name: 'Mate de Flor',
        price: 800,
        stock: 20,
        img: '../Assets/mateflor.jpg',
        category: "mate",
    },
    {
        id: 5,
        name: 'Mate Ovalado Hoja',
        price: 1000,
        stock: 15,
        img: '../Assets/mateovahoja.jpeg',
        category: "mate especial",
    },
    {
        id: 6,
        name: 'Mate Triangular Hoja',
        price: 1000,
        stock: 10,
        img: '../Assets/matetrianhoja.jpeg',
        category: "mate especial",
    },
]

    const getProduct = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })

    useEffect(() => {
        getProduct.then(resultsProducts => {
            resultsProducts.filter(resultsProducts => {
            if (resultsProducts.id === parseInt(id)) {
                setProduct(resultsProducts)
                setLoader(false)
            }
        })
    })
}, [id])


    return (
        <div>
            {loader ?
                <CircularProgress/>
                :
                <ItemDetail data={product}/>
            }
        </div>
    )




}

