import React, { useState } from "react"; 

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null); 

  const images = [
    { src: "/6c060c3257ddb0fb08db6a63acaf5b69.jpg", alt: "Art 1", title: "Art by Member 1" },
    { src: "/aa26dad5b440a47984fd8f3890952988.jpg", alt: "Art 2", title: "Art by Member 2" },
    { src: "/photo_2025-03-12_20-18-32.jpg", alt: "Art 3", title: "Art by Member 3" },
    { src: "/6c060c3257ddb0fb08db6a63acaf5b69.jpg", alt: "Art 1", title: "Art by Member 1" },
    { src: "/aa26dad5b440a47984fd8f3890952988.jpg", alt: "Art 2", title: "Art by Member 2" },
    { src: "/photo_2025-03-12_20-18-32.jpg", alt: "Art 3", title: "Art by Member 3" },
    { src: "/6c060c3257ddb0fb08db6a63acaf5b69.jpg", alt: "Art 1", title: "Art by Member 1" },
    { src: "/aa26dad5b440a47984fd8f3890952988.jpg", alt: "Art 2", title: "Art by Member 2" },
    { src: "/photo_2025-03-12_20-18-32.jpg", alt: "Art 3", title: "Art by Member 3" },
    { src: "/6c060c3257ddb0fb08db6a63acaf5b69.jpg", alt: "Art 1", title: "Art by Member 1" },
    { src: "/aa26dad5b440a47984fd8f3890952988.jpg", alt: "Art 2", title: "Art by Member 2" },
    { src: "/photo_2025-03-12_20-18-32.jpg", alt: "Art 3", title: "Art by Member 3" },
    
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <h1>Art Club Gallery</h1>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              title={image.title}
              onClick={() => handleImageClick(image.src)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={selectedImage} alt="Selected Artwork" />
        </div>
      )}

      <div className="submit-art">
        <h2>Submit Your Art</h2>
        <form>
          <input type="file" name="artwork" accept="image/*" />
          <textarea placeholder="Art Description" name="description"></textarea>
          <button type="submit">Submit Art</button>
        </form>
      </div>
    </div>
  );
};

export default GalleryPage;
