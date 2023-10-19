import React from 'react'

const List = [
    {
      "id":1,
      "title":"mobile",
      "price":14,
      "quantity":3,
      "total":42,
      "discountPercentage":8.04,
      "discountedPrice":39
    },
    {
      "id":2,
      "title":"car",
      "price":569,
      "quantity":1,
      "total":569,
      "discountPercentage":13.63,
      "discountedPrice":491
    },
    {
      "id":3,
      "title":"mobile",
      "price":50,
      "quantity":2,
      "total":100,
      "discountPercentage":5.07,
      "discountedPrice":95
    },
    {
      "id":4,
      "title":"car",
      "price":35,
      "quantity":1,
      "total":28,
      "discountPercentage":13.89,
      "discountedPrice":24
    },
    {
      "id":5,
      "title":"car",
      "price":35,
      "quantity":3,
      "total":105,
      "discountPercentage":8.98,
      "discountedPrice":96
    }
  ]

const ListRendering1 = () => {

    const ListItem = List.filter(List => List.price === 35);

  return (
    <div>
      <ul>
        {
            ListItem.map(List => <li>{List.price}</li>)
        }
      </ul>
    </div>
  )
}

export default ListRendering1
