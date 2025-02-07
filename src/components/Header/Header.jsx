import { Box } from "@mui/material";

import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

import styles from "./styles";

const Header = () => (
  <Box sx={styles.header}>
    <Logo />
    <Navbar />
  </Box>
);

export default Header;