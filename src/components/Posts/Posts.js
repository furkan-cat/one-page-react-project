import "./Posts.css";

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
          <div className="post--text">
            <div className="post--text__1">CAMBODIA</div>
            <div className="post--text__2">Perfect View</div>
          </div>
        </div>
        <div className="post2">
          <div className="post--text">
            <div className="post--text__1">BALI</div>
            <div className="post--text__2">Perfect View</div>
          </div>
        </div>
        <div className="post3">
          <div className="post--text">
            <div className="post--text__1">AUSTRALIA</div>
            <div className="post--text__2">Perfect View</div>
          </div>
        </div>
        <div className="post4">
          <div className="post--text">
            <div className="post--text__1">ITALY</div>
            <div className="post--text__2">Perfect View</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
