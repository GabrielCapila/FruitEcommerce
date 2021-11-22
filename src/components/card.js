import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import styled from "styled-components"
import './card.css'
import { CartContext } from '../contexts/CartContext';

const CardDiv = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* margin: auto;
  min-height: 50%; 
  width: 20rem; */
  text-align: center;
  font-family: arial;
  background-color: white;
  border-radius: 1rem;
`

const Price = styled.p`
color: grey;
  font-size: 20px;
  font-weight: 500;
`
let formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function Card(props) {
  const [cart, setCart] = useContext(CartContext)
  
  const addToCart = () => {
    const fruit = { name: props.name, price: props.value, img: props.img }
    setCart(current => [...current, fruit])
    localStorage.setItem('cartLength', JSON.stringify(cart.length))
    localStorage.setItem('fruit', JSON.stringify(fruit))
    
  }
  localStorage.setItem('cart', JSON.stringify(cart))
  console.log(cart)
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice))


  return (
    <CardDiv>
      <img alt="" className="fruitImg" src={props.img} />
      <h2>{props.name}</h2>
      <Price>{formatter.format(props.value)}</Price>
      <button className="cardButton" onClick={addToCart}>
        <FontAwesomeIcon icon={faShoppingCart} />

      </button>
    </CardDiv>
  );
}

export default Card;