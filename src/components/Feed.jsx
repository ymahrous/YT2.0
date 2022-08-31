import Videos from "./Videos";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { fetchData } from '../utils/fetchData';
import { Box, Stack, Typography } from "@mui/material";

export default function Feed() {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('New');
  useEffect(() => {
    const data = fetchData(`search?part=snippet&q=${selectedCategory}`).then(data => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: {xs: 'column', md: 'row'} }}>
      <Box sx={{ height: {xs: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {xs: 0, md: 2} }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        {/* <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>Copyright 2022 YT 2.0</Typography> */}
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};