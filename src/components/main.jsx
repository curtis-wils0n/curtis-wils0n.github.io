import React from "react";
import { container, logoContainer, logo } from "./main.module.css";

const Main = () => {
  return (
    <div className={ container }>
      <div className={ logoContainer }>
        <img
          className={ logo }
          src="https://github.com/curtis-wils0n/curtis-wils0n.github.io/blob/feature/front-page/src/images/profile.png?raw=true"
          alt="Doghouse logo"
        />
      </div>
      <h1>Test</h1>
    </div>
  )
}

export default Main;