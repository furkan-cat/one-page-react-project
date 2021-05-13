import footerimg from "../../public/images/footer-background.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner-container">
        <div className="logo-box">
          <div>Logo</div>
        </div>
        <div className="inner-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          cupiditate neque sit expedita quis corrupti qo nesciunt minus,
          officiis animi! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur aliquam tempora neque soluta consectetur suscipit.
        </div>
        <div>
          <span>Countries</span>
          <ul className="list-container">
            <li>France</li>
            <li>Germany</li>
            <li>India</li>
            <li>United States</li>
            <li>Japan</li>
            <li>Italy</li>
            <li>United Kingdom</li>
          </ul>
        </div>
        <div className="stay">
          <div>Stay in Touch</div>
          <div>Follow Us</div>
        </div>
      </div>
      <div className="footer">
        <div> 2020</div>
        <div>All Right Reserved</div>
        <div>Made with Love from India</div>
      </div>
    </div>
  );
};

export default Footer;
