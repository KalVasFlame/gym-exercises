import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { useStore } from "../../store/store";

import styles from "./styles";

const Navbar = () => {
  const location = useLocation();
  const id = useStore((state) => state.selectedExerciseId);

  return (
    <Box sx={styles.navbar}>
      <Link to="/" style={styles.navbarLink}>
        <Typography
          sx={
            location.pathname === "/"
              ? styles.navbarLinkActiveText
              : styles.navbarLinkText
          }
        >
          Search Exercises
        </Typography>
      </Link>
      {id && (
        <Link to={`/exercise/${id}`} style={styles.navbarLink}>
          <Typography
            sx={
              location.pathname === `/exercise/${id}`
                ? styles.navbarLinkActiveText
                : styles.navbarLinkText
            }
          >
            Exercise Details
          </Typography>
        </Link>
      )}
    </Box>
  );
};

export default Navbar;
