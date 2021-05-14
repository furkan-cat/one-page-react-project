import "./PhotoGallery.css";
import gallery1 from "../../public/images/photo-gallery-1.jpg";
import gallery2 from "../../public/images/photo-gallery-2.jpg";
import gallery3 from "../../public/images/photo-gallery-3.jpg";

const PhotoGallery = () => {
  return (
    <div className="h3-container">
      <h3>Our Photo Gallery</h3>
      <div className="gallery-container">
        <img src={gallery1} className="img1 hv1" />
        <img src={gallery2} className="img1 hv2" />
      </div>
      <div className="col-2">
        <img src={gallery3} className="img2" />
      </div>
      <button className="gallery-button">Explore more</button>
    </div>
  );
};

export default PhotoGallery;
