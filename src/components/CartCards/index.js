import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import './styles.css'
import lodash from 'lodash'

export default function CartCard() {

    const cartData = localStorage.getItem('cart')
    const cartDataParsed = JSON.parse(cartData)

    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    console.log()

    const fruitObject = lodash.groupBy(cartDataParsed, 'name')
    console.log(fruitObject)

    return (
        <div className="container">
            <div className="row">
                {
                    Object.keys(fruitObject).map(res => (
                        <div className="row">
                            <div className="cardDiv">
                                <img className="fruitImgCart" src={fruitObject[res][0].img} />
                                <div className="textDiv">
                                    <span>
                                        Item: {fruitObject[res][0].name}
                                    </span>
                                    <span>
                                       {formatter.format(fruitObject[res][0].price)}
                                    </span>
                                    <span>
                                        Quantidade: {fruitObject[res].length}
                                    </span>
                                </div>
                            </div>
                        </div>

                    )
                    )
                }
            </div>
        </div>
    )
}