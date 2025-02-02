import { Link } from "react-router-dom";
import { Stack } from "@mui/material";


import logo from "../../assets/images/logo.png";

import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();

  return (
    <Stack
    direction="row"
      className={classes.navBar}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className={classes.logo}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to="/" className={classes.link + ' ' + classes.current}>
          Home
        </Link>
        <Link to="/exercises" className={classes.link}>
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default NavBar;
