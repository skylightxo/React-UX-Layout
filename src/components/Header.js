import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src="/icons/logo.svg" alt="logo" />
        <ul className="social">
          <li className="social__link">
            <a href="https://www.linkedin.com/company/10820520/admin/">
              <img src="/icons/Linkedin.svg" alt="Linkedin icon" />
            </a>
          </li>
          <li className="social__link">
            <a href="https://twitter.com/Hocelot_Spain">
              <img src="/icons/TW.svg" alt="Twitter icon" />
            </a>
          </li>
          <li className="social__link">
            <a href="https://www.facebook.com/Hocelot/">
              <img src="/icons/FB.svg" alt="Facebook icon" />
            </a>
          </li>
          <li className="social__link">
            <a href="https://www.instagram.com/hocelot_brand/">
              <img src="/icons/Insta.svg" alt="Instagram icon" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
