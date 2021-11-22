import React, { useState, useEffect, useContext } from "react";
import "./style.css";
import { CSSTransition } from "react-transition-group";
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from "../../contexts/CartContext";


export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [cart, setCart] = useContext(CartContext)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };


    return (



        <header className="Header">
            <FontAwesomeIcon className="Logo" icon={faAppleAlt} />
            <nav className="Nav">
                    <a href="/home">Home</a>
                <div className="cartDiv">
                    <a href="/carrinho">Carrinho </a>
                    <div>({cart.length})</div>
                </div>
            </nav>


        </header>

    )
}