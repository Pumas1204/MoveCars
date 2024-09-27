// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import DestinationBox from './components/DestinationBox';
import ImageGallery from './components/ImageGallery'; // Correct import
import ShippingHeader from './components/ShippingHeader';


function App() {
  return (
    <>
      <Navbar />
      <ShippingHeader />
      <DestinationBox />
      <ImageGallery /> {/* Use ImageGallery here */}
    </>
  );
}

export default App;
