// src/components/CustomCarousel.js
import React, { useState } from 'react';
import CustomCarouselItem from './CustomCarouselItems';
import customData from '../CustomData';

const CustomCarousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const rotateCarousel = (direction) => {
    const totalItems = customData.length;
    let newIndex;

    if (direction === 'next') {
      newIndex = (selectedItem + 1) % totalItems;
    } else {
      // Ensure the index is non-negative by adding totalItems
      newIndex = (selectedItem - 1 + totalItems) % totalItems;
    }

    setSelectedItem(newIndex);
  };

  return (
    <div className="custom-carousel">
      {customData.map((item, index) => (
        <CustomCarouselItem
          key={index}
          item={item}
          selected={index === selectedItem}
          onClick={() => handleItemClick(index)}
        />
      ))}
      <button className="custom-arrow custom-arrow-left" onClick={() => rotateCarousel('prev')}>
        &lt;
      </button>
      <button className="custom-arrow custom-arrow-right" onClick={() => rotateCarousel('next')}>
        &gt;
      </button>
    </div>
  );
};

export default CustomCarousel;
