import{
    Routes,
    Route,
    Redirect
} from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import IndexPage from './pages'
import Carrinho from './pages/Carrinho/Carrinho'
import Login from './pages/Login'

export default function MainRoutes(){
    return (
        <CartProvider>

        <Routes>
            <Route path="/home" element={<IndexPage/>}/>
            <Route path="/carrinho" element={<Carrinho/>}/>
            <Route path="/" element={<Login/>}/>
            
        </Routes>
        </CartProvider>

    )
}