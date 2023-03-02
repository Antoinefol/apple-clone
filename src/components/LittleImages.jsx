import React from 'react';

export function LittleImages(props) {
  return (
    <div className='Little'>
      <img src={`./apple-images/${props.imageSrc}`} />
    </div>
  );
}