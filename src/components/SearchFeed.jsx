import Videos from "./Videos";
import { useState, useEffect } from "react";
import { fetchData } from '../utils/fetchData';
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function SearchFeed() {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const data = fetchData(`search?part=snippet&q=${searchTerm}`).then(data => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search results for: <span style={{ color: '#FC1503' }}>{searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};