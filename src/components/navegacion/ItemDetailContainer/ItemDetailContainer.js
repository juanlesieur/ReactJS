import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import CircularProgress from '@mui/material/CircularProgress';
import dataProducts from "../../productos";


export default function ItemDetailContainer () {
    const [product, setProduct] = useState ([])
    const [loader, setLoader] = useState(true)
    const { id } = useParams()


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

