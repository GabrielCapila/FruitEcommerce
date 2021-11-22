import React from 'react';
import CartCard from '../../components/CartCards';
import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './style.css'

/*
 Os itens enviados para o carrinho ficarão salvos até o momento que a tela for atualizada e o estado alterado.
 Ou seja, caso entre no carrinho e saia, o carrinho será zerado.

*/

function Carrinho() {

    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });


    const totalPrice = localStorage.getItem('totalPrice')
    const totalPriceParsed = JSON.parse(totalPrice)

    const cartLength = localStorage.getItem('cartLength')
    const cartLengthParsed = JSON.parse(cartLength)

    const cartData = localStorage.getItem('cart')
    const cartParsed = JSON.parse(cartData)

    function printDocument() {
        const input = document.getElementById('teste');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("download.pdf");
            })
            ;
    }
    //  a biblioteca que utilizei para gerar o PDF é um pouco limitada, existem outras melhores mas elas precisam usam metodos do node,
    //  o método *render* por exemplo.

    return (
        <>
            <Header />
            <div className="cartContainer" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" >
                            <div className="containerCheckout">
                                <div id="info" className="containerInfo">
                                    <div>
                                        <span>Email do usuário: teste@gmail.com </span>
                                    </div>
                                    <span>Itens no carrinho: {cartLengthParsed + 1} </span>
                                    <span>Preço total: {formatter.format(totalPriceParsed)} </span>
                                </div>
                                <div className="divButton">
                                    <button className="buttonCheckout" onClick={printDocument}>Checkout</button>
                                    {/* <ButtonCheckout name={cartParsed.name} price={cartParsed.price} img={cartParsed.img} /> */}
                                </div>
                            </div>
                            <div id="teste">
                            <CartCard name={cartParsed.name} price={cartParsed.price} img={cartParsed.img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Carrinho;