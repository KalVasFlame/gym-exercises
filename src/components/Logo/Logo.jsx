import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import logo from "../../assets/images/Logo.png";

import styles from "./styles";

const Logo = () => (
  <Box sx={styles.container}>
    <Link to="/">
      <img src={logo} alt="Home Gym" width={150} height={150} />
    </Link>
    <Typography sx={styles.logoText}>Home Gym</Typography>
  </Box>
);

export default Logo;
