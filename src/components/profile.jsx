import React from "react";
import useImagePreloader from "../hooks/useImagePreloader";
import { container, logoContainer, logo, loadingLogo } from "../styles/profile.module.css";

const profileImage = ["https://github.com/curtis-wils0n/curtis-wils0n.github.io/blob/feature/front-page/src/images/profile.png?raw=true"];

const Profile = () => {

  const { imagesPreloaded } = useImagePreloader(profileImage);

  return (
    <div className={ container }>
      <div className={ logoContainer }>
        { imagesPreloaded ? 
            <img
              className={ logo }
              src={ profileImage }
              alt="Profile"
            />
          : <span
              className={ loadingLogo }
            />
        }
      </div>
    </div>
  )
}

export default Profile;