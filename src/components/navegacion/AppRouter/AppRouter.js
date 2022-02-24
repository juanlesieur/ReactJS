import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import Footer from "../Footer/Footer"
import { CartProviden } from "../CartContext/CartContext";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Cart from "../Cart";

export default function AppRouter () {
    return (
        <BrowserRouter>
        <CartProviden>
        <NavBar/>
        <Routes>
            <Route path="/products/:id" element = {<ItemDetailContainer/>}/>
            <Route path="/:category/" element = {<ItemListContainer/>}/>
            <Route path="/cart" element = {<Cart/>}/>
            {/*<Route path="/aboutus" element = {<AboutUsPage/>}/>*/}
            <Route path="/" element = {<ItemListContainer/>}/>
            {/*<Route path="/" element = {<NotFoundPage/>}/>*/}
        </Routes>
        </CartProviden>
        <Footer/>
        </BrowserRouter>
    )
}




