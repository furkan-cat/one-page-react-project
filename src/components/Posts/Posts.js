import "./Posts.css";
import logo from "../../public/images/tpp-graphic-ustr-600.jpg";
import video from "../../public/images/Feet Out of the Car Window.mp4";
import ReactPlayer from "react-player";

const Posts = () => {
  return (
    <div>
      <div className="post-container">
        <p className="underline">Popular Posts</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          similique assumenda at vitae, rerum illum, culpa quas iste est quia
          ratione repellat. Dolorem iure voluptates veritatis vero cupiditate ad
          excepturi? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Sed officiis quasi non quas eaque asperiores omnis ullam quos aliquid
          consequuntur. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Omnis quidem doloremque nesciunt enim optio. Ut a amet adipisci
          expedita nisi.
        </p>
      </div>
      <div className="image-container">
        <div className="post1">
          <div className="post--text--container">
            <div className="post--text__1">CAMBODIA</div>
          </div>
        </div>
        <div className="post2">
          <div className="post--text--container">
            <div className="con">
              <div className="post--text__1">THAILAND</div>
            </div>
          </div>
        </div>
        <div className="post3">
          <div className="post--text--container">
            <div className="post--text__1">AUSTRALIA</div>
          </div>
        </div>
        <div className="post4">
          <div className="post--text--container">
            <div className="post--text__1">HONG KONG</div>
          </div>
        </div>
      </div>
      <div className="map-container">
        <div className="section-container">
          <p>Places you traveled so far!</p>
          <p>We've travelled 150+countries with all new adventures.</p>
        </div>
        <div>
          <img src={logo} width="800" height="450" className="map" />
        </div>
      </div>
      <div className="vblog-container">
        <div className="react">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=h_xjfqrFl7o"
            className="video"
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
