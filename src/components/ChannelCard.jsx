import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from '../utils/constants';
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

export default function ChannelCard({ channel, marginTop }) {
    return (
        <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: {xs: '356px', md: '320px'}, height: '326px', margin: 'auto', marginTop: marginTop }}>
            <Link to={`/channel/${channel?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                    <CardMedia sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channel?.snippet?.title} />
                    <Typography variant='h6'>
                        {channel?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channel?.statistics?.subscriberCount && (
                        <Typography>{parseInt(channel?.statistics?.subscriberCount).toLocaleString()} subscribers</Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
};