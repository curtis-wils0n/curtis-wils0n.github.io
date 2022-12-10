import React from "react";
import { container, logoContainer, logo } from "../styles/profile.module.css";

const Profile = () => {
  return (
    <div className={ container }>
      <div className={ logoContainer }>
        <img
          className={ logo }
          src="https://github.com/curtis-wils0n/curtis-wils0n.github.io/blob/feature/front-page/src/images/profile.png?raw=true"
          alt="Doghouse logo"
        />
      </div>
    </div>
  )
}

export default Profile;