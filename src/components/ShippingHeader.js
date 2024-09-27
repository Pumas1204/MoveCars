// src/components/ShippingHeader.js
import React, { useState, useEffect } from 'react';

const cityList = [
  'Los Angeles, USA',
  'New York, USA',
  'Houston, USA',
  'Toronto, Canada',
  'Mexico City, Mexico',
  'London, UK',
  'Paris, France',
  'Berlin, Germany',
  'Tokyo, Japan',
  'Sydney, Australia',
];

function ShippingHeader() {
  const [currentCity, setCurrentCity] = useState(cityList[0]);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setCurrentCity((prevCity) => {
          const currentIndex = cityList.indexOf(prevCity);
          const nextIndex = (currentIndex + 1) % cityList.length;
          return cityList[nextIndex];
        });
        setFadeClass('fade-in');
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="shipping-header">
    <h1>Shipping?</h1>
    <h2>
      Where to? <span className={fadeClass}>{currentCity}</span>
    </h2>
    <img
        src="https://static.vecteezy.com/system/resources/previews/016/134/506/original/cartoon-truck-car-icon-in-comic-style-fast-delivery-service-shipping-sign-illustration-pictogram-car-van-business-splash-effect-concept-vector.jpg"
        alt="Delivery Truck"
        className="delivery-image"
      />
  </div>
  );
}

export default ShippingHeader;
