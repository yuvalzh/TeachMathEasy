import React from "react";
import { useState } from "react";

import profilePic from "../../assets/profilePic.png";
import iconProfile from "../../assets/iconProfile.png";
import iconSchedule from "../../assets/iconSchedule.png";
import iconCenterInformation from "../../assets/iconCenterInformation.png";

import {
  AppBarContainer,
  ProfilePicture,
  HelloProfile,
  Button,
  LogoImage,
  LogoTitle,
} from "./AppBar.styled";

const AppBar = () => {
  const [acceptButton, setAcceptButton] = useState("Free");
  return (
    <AppBarContainer>
      <img src={profilePic} height="100" width="100"></img>
      <HelloProfile> Hello Teacher</HelloProfile>
      <Button>
        <LogoImage>
          <img src={iconSchedule} height="60"></img>
        </LogoImage>
        <LogoTitle> Schedule </LogoTitle>
      </Button>
      <Button>
        <LogoImage>
          <img src={iconProfile} height="60"></img>
        </LogoImage>
        <LogoTitle> Profile </LogoTitle>
      </Button>
      <Button>
        <LogoImage>
          <img src={iconCenterInformation} height="60"></img>
        </LogoImage>
        <LogoTitle> Information Center </LogoTitle>
      </Button>
    </AppBarContainer>
  );
};

export default AppBar;
