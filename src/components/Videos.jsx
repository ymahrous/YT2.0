import Loader from './Loader';
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import { Box, Stack } from "@mui/material";

export default function Videos({ videos, direction }) {
    if(!videos) {
        return <Loader />;
    };

    return (
        <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.channelId && <ChannelCard channel={item} />}
                    {item.id.videoId && <VideoCard video={item} />}
                </Box>
            ))}
        </Stack>
    );
};