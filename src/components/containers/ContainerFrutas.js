import React from 'react';
import Card from '../card';
import { useState } from 'react';
import './style.css'
import macaImg from '../../assets/MacaImg.png'
import peraImg from '../../assets/PeraImg.png'
import pineAppleImg from '../../assets/PineappleImg.png'
import bananaImg from '../../assets/BananaImg.png'
import mangaImg from '../../assets/MangaImg.png'
import Fuse from 'fuse.js'

export default function ContainerFrutas() {
    const frutas = [
        {
            id: 1,
            name: 'Maçã',
            price: 1.60,
            imgPath: macaImg
        },
        {
            id: 2,
            name: 'Pêra',
            price: 3.50,
            imgPath: peraImg
        },
        {
            id: 3,
            name: 'Abacaxi',
            price: 1.20,
            imgPath: pineAppleImg
        },
        {
            id: 4,
            name: 'Banana',
            price: 2.80,
            imgPath: bananaImg
        },
        {
            id: 5,
            name: 'Manga',
            price: 1.90,
            imgPath: mangaImg
        },
    ]
    const [filter, setFilter] = useState('')

    const options = {
        includeScore: false,
        keys: ['name']
    }


    function handleFruits(value) {
        setFilter(value)
    }
    let fuse = new Fuse(frutas, options)

    // o retorno será de todos os objetos encontrados com as letras digitas no input

    let result = fuse.search(filter)
    let searchedFruit = filter ? result.map(fruit => fruit.item) : frutas

    return (
        <>
            <div className="divContainer">
                <div className="container" >
                    <div className="row" >
                        <div className="col-lg-12" >
                            <input type="text" class="searchTerm" placeholder="Pesquise sua fruta..." onKeyUp={e => handleFruits(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        {
                            searchedFruit.map(res => (
                                <div className="col-lg-4" >
                                    <Card key={res.id} name={res.name} value={res.price} img={res.imgPath}>
                                    </Card>
                                </div>)
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}