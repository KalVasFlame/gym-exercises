import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

import { useStore } from "../../store/store";

import styles from "./styles";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const updateSearch = useStore((state) => state.updateSearch);

  return (
    <>
      <Box sx={styles.search}>
        <TextField
          fullWidth
          error
          id="outlined-error"
          label="Search exercises"
          defaultValue={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Button
          variant="contained"
          color="error"
          onClick={() => updateSearch(searchInput)}
        >
          Search Exercises
        </Button>
      </Box>
    </>
  );
};

export default Search;
