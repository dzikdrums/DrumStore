import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ id, tag, img, name, price }) => {
  console.log(img);
  return (
    <>
      <h1>{id}</h1>
      <h1>{tag}</h1>
      {/* <h1>{img}</h1> */}
      <h1>{name}</h1>
      <h1>{price}</h1>
    </>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  tag: PropTypes.string,
  img: PropTypes.shape({
    src: PropTypes.string,
  }),
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
