import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards(props) {
    return (
        <div className='cards'>
            <h1>{props.cardData.title}</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {
                            props.cardData.cards.map((item, index) => {

                                return (
                                    <CardItem
                                        src={`images/${item.image}`}
                                        text={item.title}
                                        label={item.label}
                                        path='/services'
                                        key={index}
                                    />
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
