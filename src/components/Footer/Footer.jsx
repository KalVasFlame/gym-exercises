import { Box, Typography } from "@mui/material";

import styles from "./styles";

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Typography variant="h5" sx={styles.footerText}>
        Made with ❤️ by KalVasFlame
      </Typography>
    </Box>
  );
};
export default Footer;
