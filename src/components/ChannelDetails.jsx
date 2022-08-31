import Videos from './Videos';
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from '../utils/fetchData';

export default function ChannelDetails() {
  const { id } = useParams();
  const [vids, setVids] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);
  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then(data => setChannelDetail(data?.items[0]));
    fetchData(`search?channelId=${id}&part=snippet&order=date`).then(data => setVids(data?.items));
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{ background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,109,121,1) 0%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '300px' }} />
        <ChannelCard channel={channelDetail} marginTop='-110px' />
      </Box>
      <Box display='flex' p={2}>
        <Box sx={{ mr: {sm: '100px'} }} />
        <Videos videos={vids} />
      </Box>
    </Box>
  );
};