import { Box, Typography } from "@mui/material";

import banner from "../../assets/images/banner.png";

import styles from "./styles";

const Hero = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.textContainer}>
        <Typography variant="h3" textAlign={"center"}>
          <span style={{ color: "red" }}>Move Better,</span>{" "}
          <span style={{ color: "yellow" }}>Feel Better,</span> <br />{" "}
          <span style={{ color: "green" }}>Live Better</span>
        </Typography>
        <Typography variant="h6" textAlign={"center"}>
          Elevate your health and energy with expert-designed workouts <br />
          and motivation.
        </Typography>
      </Box>
      <Box sx={styles.banner}>
        <img src={banner} alt="Home Gym" />
      </Box>
    </Box>
  );
};

export default Hero;