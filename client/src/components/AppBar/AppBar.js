import React from "react";
import { useState } from "react";

import profilePic from "../../assets/profilePic.png";
import iconProfile from "../../assets/iconProfile.png";
import iconSchedule from "../../assets/iconSchedule.png";
import iconCenterInformation from "../../assets/iconCenterInformation.png";

import {
  AppBarContainer,
  HelloProfile,
  Button,
  LogoTitle,
} from "./AppBar.styled";

const AppBar = () => {
  const [acceptButton, setAcceptButton] = useState("Free");
  return (
    <AppBarContainer>
      <img src={profilePic} height="100" width="100" />
      <HelloProfile> Hello Teacher</HelloProfile>
      <Button>
        <img src={iconSchedule} height="60" />
        <LogoTitle> Schedule </LogoTitle>
      </Button>
      <Button>
        <img src={iconProfile} height="60" />
        <LogoTitle> Profile </LogoTitle>
      </Button>
      <Button>
        <img src={iconCenterInformation} height="60" />
        <LogoTitle> Information Center </LogoTitle>
      </Button>
    </AppBarContainer>
  );
};

export default AppBar;
