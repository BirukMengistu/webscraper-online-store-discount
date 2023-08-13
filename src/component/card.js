import React from 'react'
import './card-styles.css'

/* "pos": 48,
"url": "/New-Balance-FuelCore-Nergize-Training/dp/B06XSCLBMH/ref=sr_1_48?keywords=deal+for+today&qid=1691767872&sr=8-48",
"asin": "B06XSCLBMH",
"price": 52.48,
"title": "Women's FuelCore Nergize V1 Sneaker",
"rating": 4.4,
"currency": "USD",
"is_prime": true,
"url_image": "https://m.media-amazon.com/images/I/71xXFLETfxL._AC_UL400_.jpg",
"best_seller": false,
"price_upper": 52.48, */
const Card = ({item}) => {
    const titleFormatted = item.title.slice(0,20)
    const DiscountPricePercent =  item.price_strikethrough-  item.price
  console.log(item)
  return (
    <div className='card'>
        <div className='img-container'>
          <img src={item.url_image} alt={item.title} />
        </div>
        <div className='text-container'>
         
          <h5>{titleFormatted}..</h5>
          <p>Price drop from {item.price_strikethrough} to {item.price}</p>
           <p>Rating:{item.rating}..</p>
        </div>
        <div className='info-container'>
            <div className='circle'>{DiscountPricePercent.toFixed(0)}</div>
            <a href={item.url}>Go!</a>
          </div>
    </div>
  )
}

export default Card