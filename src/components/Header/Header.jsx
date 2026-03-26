import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import {
  PiShareFat,
  PiHeart,
  PiShoppingCartSimpleLight,
  PiUser,
} from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Header.css";
import logoDesk from "../../assets/images/logo_desk.png";

function Header() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const navItems = [
    { label: "2025 New Products" },
    { label: "Apparel", dropdown: ["T-Shirts", "Hoodies", "Jackets"] },
    { label: "Bags" },
    { label: "Drinkware", dropdown: ["Bottles", "Mugs", "Tumblers"] },
    { label: "Health & Wellness" },
    { label: "Office" },
    { label: "Tech", dropdown: ["Gadgets", "Accessories"] },
    { label: "Gifts", dropdown: ["Corporate", "Seasonal"] },
    { label: "Tradeshow", dropdown: ["Booth Items", "Displays"] },
    { label: "Travel", dropdown: ["Luggage", "Accessories"] },
  ];

  return (
    <header id="header">
      <div className="topBar">
        <div className="topBarContent">
          <span>Free shipping on orders above $99!</span>
          <div className="topBarRight">
            <span>New Items</span>
            <span>Clearance</span>
            <span>Safe Tools</span>
            <span>Catalog</span>
          </div>
        </div>
      </div>

      <div className="mainHeader">
        <div className="logo">
          <img
            className="logoDesk"
            src={logoDesk}
            alt="logo"
            height={50}
            width={200}
          />
        </div>

        <div className="searchBox">
          <input type="text" placeholder="Search here.." />
          <FaSearch />
        </div>

        <div className="icons">
          <div className="icon">
            <PiShareFat />
          </div>
          <div className="icon">
            <PiHeart />
          </div>
          <div className="icon">
            <PiShoppingCartSimpleLight />
          </div>
          <div className="icon">
            <PiUser />
          </div>
        </div>
        <FaBars className="menuIcon" onClick={() => setOpen(true)} />
      </div>

      <nav className="nav desktopNav">
        <div className="navbar">
          {navItems.map((item, index) => (
            <div key={index} className="navItem">
              <span>
                {item.label}
                {item.dropdown && <IoIosArrowDown />}
              </span>

              {item.dropdown && (
                <div className="dropdown">
                  {item.dropdown.map((sub, i) => (
                    <div key={i} className="dropdownItem">
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div className={`mobileMenu ${open ? "show" : ""}`}>
        <div className="mobileHeader">
          <div></div>
          <h2>Menu</h2>
          <button onClick={() => setOpen(false)}>
            <IoIosCloseCircleOutline />
          </button>
        </div>

        <div className="searchBox">
          <input type="text" placeholder="Search here.." />
          <FaSearch />
        </div>

        {navItems.map((item, index) => (
          <div key={index} className="mobileItem">
            <div
              className="mobileItemHeader"
              onClick={() => item.dropdown && toggleDropdown(index)}
            >
              {item.label}
              {item.dropdown && <IoIosArrowDown />}
            </div>

            {item.dropdown && activeDropdown === index && (
              <div className="mobileDropdown">
                {item.dropdown.map((sub, i) => (
                  <div key={i}>{sub}</div>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="icons">
          <div className="icon">
            <PiShareFat />
          </div>
          <div className="icon">
            <PiHeart />
          </div>
          <div className="icon">
            <PiShoppingCartSimpleLight />
          </div>
          <div className="icon">
            <PiUser />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
