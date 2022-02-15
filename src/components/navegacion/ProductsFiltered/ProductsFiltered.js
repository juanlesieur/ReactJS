import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import "./ProductsFiltered.css";



const FilteredItems = ({title}) => {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const { category } = useParams()
    const dataProducts = [
        {
            id: 1,
            name: 'Mate de Flor con bandeja',
            price: 1500,
            stock: 10,
            img:'matebandejaflor.jpg',
            category: "mate y bandeja",
        },
        {
            id: 2,
            name: 'Mate de Hoja con bandeja',
            price: 1400,
            stock: 20,
            img: 'matebandejahoja.jpg',
            category: "mate y bandeja",
        },
        {
            id: 3,
            name: 'Mate de Buho',
            price: 800,
            stock: 30,
            img: 'matebuho.jpg',
            category: "mate",
        },
        {
            id: 4,
            name: 'Mate de Flor',
            price: 800,
            stock: 20,
            img: 'mateflor.jpg',
            category: "mate",
        },
        {
            id: 5,
            name: 'Mate Ovalado Hoja',
            price: 1000,
            stock: 15,
            img: 'mateovahoja.jpeg',
            category: "mate especial",
        },
        {
            id: 6,
            name: 'Mate Triangular Hoja',
            price: 1000,
            stock: 10,
            img: 'matetrianhoja.jpeg',
            category: "mate especial",
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProducts)
        }, 2000)
    })

    useEffect(() => {
        getProducts.then((resultsProducts) => {
            if(category) {
                resultsProducts.filter(resultProduct => {
                    if (resultProduct.category === category) {
                        setProducts(products => [...products, resultProduct])
                        setLoader(false)
                    }
                })
            }
            else{
                setProducts(resultsProducts)
                setLoader(false)
            }
        })
    }, [category])

    return (
        <>
            <h2 className='tituloCategoria'>{category ? category : title}</h2>
            <Container className="product-container">
                {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <Grid container spacing={2}>
                            {products.map(product => {
                                return (
                                    <Grid item xs={3} key={product.id}>
                                        <Item data={product} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                }
            </Container>
        </>
    )
}


export default FilteredItems