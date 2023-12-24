// src/components/CustomCarouselItem.js
import React from 'react';

const CustomCarouselItem = ({ item, selected, onClick }) => {
  return (
    <div className={`custom-carousel-item ${selected ? 'custom-selected' : ''}`} onClick={onClick}>
      {/* Your item content goes here */}
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default CustomCarouselItem;
