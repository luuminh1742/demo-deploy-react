import React from 'react'
import Cards from '../Cards'

const cardData = {
    title:'My service',
    cards:[
        {
            title:'Photographer: Take photo cards, family photos, travel photos, ...',
            label:'Master',
            image:'photographer.jpg'
        },
        {
            title:'Designer: Edit photos, design logos, banners, ...',
            label:'Master',
            image:'designer.png'
        },
        {
            title:'Online teaching: Teaching graphic design',
            label:'Master',
            image:'online-teacher.jpg'
        }
    ]
}



function Services() {
    return (
        <>
            <h1 className='services'>
                Services
            </h1>
            <Cards
                cardData={cardData}
            /> 
        </>
    )
}

export default Services
