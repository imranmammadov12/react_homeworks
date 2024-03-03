import { useState } from "react";
import './slider.css'

const Slider = ({images}) =>{
   const[imageIndex, setImageIndex] = useState(0);

   const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const handlePrev = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };


  return (
    <div className="container">
      <img src={images[imageIndex].src} width={500} height={250} alt={images[imageIndex].description}/>
      <p>{images[imageIndex].description}</p>
      <div className="btn">
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Slider;