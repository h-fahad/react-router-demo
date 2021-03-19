import React from 'react'
import { useParams } from 'react-router';
import Shoes  from "./../shoes.json";

function ProductItems() {
  let {id} = useParams();
  const shoe = Shoes[id]

if(!shoe)
return <h1>Product not Found</h1>

  return (
    <div className="App">
     <h1>
       
     </h1>
     <div  className='Link '>
          <h5>
            {shoe.name}
          </h5>
          <img src={shoe.img} height={500} />
        
        </div>
    </div>
  );
}

export default ProductItems;
