import React from "react";
import { container, containerList } from "./footer.module.css";

const Header = () => {
  return (
    <header className={ container }>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div className={ containerList }>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Links</li>
        </ul>
      </div>
    </header>
  )
}

export default Header;