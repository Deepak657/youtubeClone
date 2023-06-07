import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Theme";

const ChannelNavbar = () => {
  return (
    <Nav>
      <NavLink to="featured">HOME</NavLink>
      <NavLink to="videos">VIDEOS</NavLink>
      <NavLink to="streams">LIVE</NavLink>
      <NavLink to="playlists">PLAYLISTS</NavLink>
      <NavLink to="community">COMMUNITY</NavLink>
      <NavLink to="channels">CHANNELS</NavLink>
      <NavLink to="about">ABOUT</NavLink>
    </Nav>
  );
};

const Nav = styled.nav`
  margin: 30px 0;
  border-bottom: 1px solid ${theme.color.lightwhite};
  color: ${theme.color.lightwhite};
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    padding: 12px 24px;
    color: ${theme.color.lightwhite};
  }
  a.active {
    color: ${theme.color.white};
    border-bottom: 2px solid ${theme.color.white};
  }
`;

export default ChannelNavbar;
