import Loader from './Loader';
import Videos from './Videos';
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { fetchData } from '../utils/fetchData';
import { CheckCircle } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";

export default function VideoDetails() {
  const { id } = useParams();
  const [vids, setVids] = useState(null);
  const [vidDetail, setVidDetail] = useState(null);
  useEffect(() => {
    fetchData(`videos?part=snippet,statistics&id=${id}`).then(data => setVidDetail(data.items[0]));
    fetchData(`videos?part=snippet,statistics&relatedToVideoId=${id}&type=video`).then(data => setVids(data.items));
  }, [id]);
  if(!vidDetail?.snippet) {
    return <Loader />;
  };

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>{vidDetail?.snippet?.title}</Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${vidDetail.snippet.channelId}`}>
                <Typography color='#fff' variant={{ sm: 'subtitle1', md: 'h6' }}>
                  {vidDetail?.snippet?.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>{parseInt(vidDetail?.statistics?.viewCount).toLocaleString()} views</Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>{parseInt(vidDetail?.statistics?.likeCount).toLocaleString()} likes</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        {vids && <Box px={2} py={{ xs: 5, md: 1 }} justifyContent='center' alignItems='center'>
          <Videos videos={vids} direction='column' />
        </Box>}
      </Stack>
    </Box>
  );
};