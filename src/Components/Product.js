import React from 'react'
import {Link} from 'react-router-dom'

import Shoes from './../shoes.json'

function Product() {
  return (
    <div className="App">
     <h1>
       Products
     </h1>
     <div className='productContainer'> 
       {Object.keys(Shoes).map(keyname=>{
         const shoe = Shoes[keyname];
        return (<Link key={keyname} className='Link' to={`/product/${keyname}`}>
          <h5>
            {shoe.name}
          </h5>
          <img src={shoe.img} height={150} />
        
        </Link>)
       })}
     </div>
    </div>
  );
}

export default Product;
