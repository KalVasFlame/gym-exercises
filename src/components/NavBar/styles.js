import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navBar: {
    gap: { sm: "122px", xs: "40px" },
    mt: { sm: "32px", xs: "20px" },
  },
  logo: {
    width: 45,
    height: 45,
    margin: "10px 20px 0",
  },
  link: {
    textDecoration: "none",
    color: "#3A1212",
  },
  current: {
    borderBottom: '3px solid #FF2625'
  }
});

export default useStyles;