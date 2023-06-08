import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { FcStart } from "react-icons/fc";
import { BsMicFill } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value);
  };
  return (
    <Navbar>
      <LogoWrapper>
        <AiOutlineMenu2 />
        <Logo onClick={() => navigate("/")}>
          <FcStart /> YouTube
        </Logo>
      </LogoWrapper>
      <SearchFieldWrapper>
        <SearchField>
          <Input
            type="text"
            placeholder="search"
            value={term}
            onChange={handleChange}
          />
          <Button onClick={() => navigate(`/results/${term}`)}>
            <AiOutlineSearch />
          </Button>
        </SearchField>
        <BsMicFill2 />
      </SearchFieldWrapper>
      <VideoNotificationProfile>
        <RiVideoAddLine />
        <MdOutlineNotifications />
        <CgProfile />
      </VideoNotificationProfile>
    </Navbar>
  );
};

const SearchField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const BsMicFill2 = styled(BsMicFill)`
  font-size: 44px;
  padding: 12px;
  border-radius: 50%;
  background: #1e1d1d;
  cursor: pointer;
  :hover {
    background: #383737;
  }
`;

const AiOutlineMenu2 = styled(AiOutlineMenu)`
  padding: 12px;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  color: #fff;
  font-size: 44px;
  :hover {
    background: #1e1d1d;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 22px;
`;

const Button = styled.button`
  color: #fff;
  background: #202020;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #424141;
  border-left: none;
  cursor: pointer;

  text-align: center;
  border-radius: 0 25px 25px 0;
`;
const Input = styled.input`
  padding: 12px 16px;
  width: 100%;
  border: 1px solid #424141;
  border-right: none;
  color: #fff;
  outline: none;
  border-radius: 25px 0 0 25px;
  background: transparent;
`;

const SearchFieldWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: #fff;
  width: 600px;
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: #fff;
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  position: sticky;
  top: 0;
  background: #000;
`;
const VideoNotificationProfile = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: #fff;
  font-size: 25px;
`;

export default Header;
