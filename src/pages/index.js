import MainLayout from "../layouts";
import React from 'react';
import ContainerFrutas from "../components/containers/ContainerFrutas";
import { CartProvider } from "../contexts/CartContext";


export default function IndexPage() {
    return (
        <CartProvider>
            <MainLayout>
                <ContainerFrutas />
            </MainLayout>
        </CartProvider>
    )
}