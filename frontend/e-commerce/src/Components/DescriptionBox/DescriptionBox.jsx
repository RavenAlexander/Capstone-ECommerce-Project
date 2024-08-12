import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Elevate your wardrobe with this amazing clothing item. Features a flattering hemline that accentuates your 
          best features, while the trendy pattern adds a modern look. The fabric provides
           a graceful and airy feel, perfect for warm days and breezy evenings. Whether paired with tailored trousers 
            or your favorite jeans for a casual outing, this item is a must-have.</p>
        <p>Make a statement with this stylish and timeless piece that combines comfort and elegance effortlessly.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
