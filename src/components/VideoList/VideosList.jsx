import { Typography, Box, Stack } from "@mui/material";

import styles from "./styles";

const VideosList = ({ exerciseVideos = [], name }) => {
  if (!exerciseVideos.length) return <Box>Loading...</Box>;

  return (
    <Box sx={styles.container} m={4}>
      <Typography variant="h4" mb={2}>
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack>
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <Box key={index} m={4}>
            <a
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              width={350}
              height={250}
            />
            <Box>
              <Typography>{item.video.title}</Typography>
              <Typography>{item.video.channelName}</Typography>
            </Box>
          </a>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default VideosList;
