import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  function handleClick(event) {
    setSelectedImage(event.target.src);
  }

  return (
    <div>
      <>
        <div className="photo-grid">
          <img
            className="images"
            src="/photos/bois1.jpg"
            alt="bois"
            onClick={handleClick}
          />
          <img
            className="images"
            src="/photos/bois2.jpg"
            alt="bois"
            onClick={handleClick}
          />
          <img
            className="images"
            src="/photos/bois3.jpg"
            alt="bois"
            onClick={handleClick}
          />
          <img
            className="images"
            src="/photos/bois8.jpg"
            alt="bois"
            onClick={handleClick}
          />
          {/* <img src="/photos/bois4.jpg" alt='bois' onClick={handleClick} />
          <img src="/photos/bois5.jpg" alt='bois' onClick={handleClick} />
          <img src="/photos/bois6.jpg" alt='bois' onClick={handleClick} /> */}
        </div>
      </>
      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="bois" />
        </div>
      )}
    </div>
  );
}
