import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter, FaArrowUpLong } from "react-icons/fa6";
import aws from "../../assets/images/aws.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <div>
          <h4>CATEGORIES</h4>
          <ul>
            <li>Apparel</li>
            <li>Bags</li>
            <li>Drinkware</li>
            <li>Lanyards</li>
            <li>Office</li>
            <li>Tech</li>
            <li>Gifts</li>
            <li>Tradeshow</li>
          </ul>
        </div>

        <div>
          <h4>SERVICES</h4>
          <ul>
            <li>24-Hour Rush</li>
            <li>Decorations</li>
            <li>Sourcing and Custom Hub</li>
            <li>eBlasts | Specials</li>
            <li>Show Schedules</li>
            <li>Special Printing Process</li>
          </ul>
        </div>

        <div>
          <h4>TOOLS</h4>
          <ul>
            <li>Check Inventory</li>
            <li>Order Status/Tracking</li>
            <li>Virtual Samples</li>
            <li>Customize</li>
            <li>Future Project List</li>
            <li>Compare Items</li>
            <li>Upload Artwork</li>
            <li>Presentation</li>
          </ul>
        </div>

        <div>
          <h4>CONTACT</h4>
          <ul className="contact">
            <li>
              <FaPhoneAlt /> +1246-345-0695
            </li>
            <li>
              <FaEnvelope /> sales@cosmopromos.com
            </li>
            <li>
              <FaMapMarkerAlt /> 12, Avenue Prime, Stafford, TX 77477
            </li>
          </ul>

          <h5>STAY CONNECTED</h5>
          <div className="socials">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTiktok />
            </span>
          </div>
        </div>
      </div>

      <a href="#header">
        <div className="footerArrow">
          <FaArrowUpLong />
        </div>
      </a>

      <div className="footerBottom">
        <p>© Online Shopping, 2025. All Rights Reserved.</p>
        <p className="powered">
          Powered by <img src={aws} alt="AWS" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
