import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav, Feed, SearchFeed, VideoDetails, ChannelDetails } from '../components';

export default function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: '#000' }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Feed />} exact />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='/channel/:id' element={<ChannelDetails />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
};