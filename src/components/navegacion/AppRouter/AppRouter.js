import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../navegacion/NavBar/Navbar";
import HomePage from "../../paginas/HomePage/Inicio";
import ContactPage from "../../paginas/ContactPage/ContactPage";
import NotFoundPage from "../../paginas/NotFoundPage/NotFoundPage";
import ProductsPage from "../../paginas/ProductsPage/ProductsPage";
import AboutUsPage from "../../paginas/AboutUsPage/AboutUsPage";
import Footer from "../../navegacion/Footer/Footer";
import ItemDetailPage from "../../paginas/ItemDetailPage/ItemDetailPage";
import CartPage from "../../paginas/CartPage/CartPage";
import CategoriesPage from "../../paginas/CategoriesPage/CategoriesPage";
import { CartProviden } from "../CartContext/CartContext";
import ContactPage from "../../paginas/ContactPage/ContactPage";

export default function AppRouter () {
    return (
        <BrowserRouter>
        <CartProviden>
        <NavBar/>
        <Routes>
            <Route path="/products/:id" element = {<ItemDetailPage/>}/>
            <Route path="/:category/" element = {<CategoriesPage/>}/>
            <Route path="/contact" element = {<ContactPage/>}/>
            <Route path="/cart" element = {<CartPage/>}/>
            <Route path="/aboutus" element = {<AboutUsPage/>}/>
            <Route path="/product" element = {<ProductsPage/>}/>
            <Route path="/" element = {<HomePage/>}/>
            <Route path="/" element = {<NotFoundPage/>}/>
        </Routes>
        </CartProviden>
        <Footer/>
        </BrowserRouter>
    )
}




