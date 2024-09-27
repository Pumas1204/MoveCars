
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
        src="https://p.turbosquid.com/ts-thumb/Sk/yInSTM/auISb3Kd/tow_truck4/jpg/1600784881/1920x1080/turn_fit_q99/bf494a1fb624d6eb2e3a1dd27683b0701a8b0353/tow_truck4-1.jpg"
        alt="Delivery Truck"
        className="delivery-image"
      />
  </div>
  );
}

export default ShippingHeader;
