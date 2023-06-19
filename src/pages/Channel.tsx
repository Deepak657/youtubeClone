import React, { useEffect } from "react";
import ChannelCard from "../components/Cards/ChannelCard";
import ChannelNavbar from "../components/Header/ChannelNavbar";
import { Outlet, useParams } from "react-router-dom";
import { Wrapper } from "./Home";
import { useDispatch } from "react-redux";
import { fetchChannelStart } from "../redux/actions/ChannelAction";
import { useGSelector } from "../redux/Store";

const Channel = () => {
  const { channelId } = useParams();
  const dispatch = useDispatch();
  const { channel } = useGSelector((state) => state.channelData);
  useEffect(() => {
    if (channelId && channel.has(channelId)) {
      return;
    }
    dispatch(fetchChannelStart({ id: channelId }));
  }, [channelId, channel]);
  return (
    <Wrapper>
      {channelId && <ChannelCard channel={channel.get(channelId)?.[0]} />}
      <ChannelNavbar />
      <Outlet />
    </Wrapper>
  );
};

export default Channel;
