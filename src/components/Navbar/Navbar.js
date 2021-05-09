import { FaBeer } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import Image from "../../img/annie-spratt-HLYdcrBtwOM-unsplash.jpg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header-con">
      <div className="header">
        <div className="nav">
          <ul>
            <li>
              <FaBeer className="icons" />
            </li>
          </ul>
          <ul className="nav-right-container">
            <li>
              <a>EN</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
            <li>
              <a>
                <BiSearchAlt className="icons" />
              </a>
            </li>
            <li>
              <a>
                <AiOutlineUser className="icons" />
              </a>
            </li>
          </ul>
        </div>
        <div className='center'>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
