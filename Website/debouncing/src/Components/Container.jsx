import React from 'react'

const Container = React.forwardRef(({ id, product }, ref) => {
    return (
      <div id={id} ref={ref} className='container'>
      <img className='image' src={product.image}/>
      <span>{product.product_name}</span>
  </div>
    );
});
export default Container