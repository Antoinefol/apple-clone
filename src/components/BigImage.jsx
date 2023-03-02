import React from 'react';

export function BigImage(props) {
  return (
    <div className='big'>
      <img src={`./apple-images/${props.imageSrc}`} alt="" />
    </div>
  );
}