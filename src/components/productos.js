import { requirePropFactory } from "@mui/material"

const dataProducts = [{
    id: 1,
    name: 'Mate de Flor con bandeja',
    price: 1500,
    stock: 10,
    img: require('../Assets/matebandejaflor.jpg'),
    category: "mate y bandeja",
},
{
    id: 2,
    name: 'Mate de Hoja con bandeja',
    price: 1400,
    stock: 20,
    img: require('../Assets/matebandejahoja.jpg'),
    category: "mate y bandeja",
},
{
    id: 3,
    name: 'Mate de Buho',
    price: 800,
    stock: 30,
    img: require('../Assets/matebuho.jpg'),
    category: "mate",
},
{
    id: 4,
    name: 'Mate de Flor',
    price: 800,
    stock: 20,
    img: require('../Assets/mateFlor.jpg'),
    category: "mate",
},
{
    id: 5,
    name: 'Mate Ovalado Hoja',
    price: 1000,
    stock: 15,
    img: require('../Assets/mateovahoja.jpeg'),
    category: "mate especial",
},
{
    id: 6,
    name: 'Mate Triangular Hoja',
    price: 1000,
    stock: 10,
    img: require('../Assets/matetrianhoja.jpeg'),
    category: "mate especial",
},
]

export default dataProducts