import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

import { fetchData, exerciseOptions } from "../../utils/api";

const url = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back";

const SearchExercise = () => {
  const [search, setSearch] = useState("");

  const { data, isPending, isError } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => fetchData(url, exerciseOptions),
  });

  console.log("data");
  console.log(data[0]);

  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box display="flex" alignItems="baseline" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "250px" },
            backgroundColor: "#fff",
          }}
          height={76}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          onClick={() => {}}
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
            backgroundColor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: { lg: "46px", xs: "36px" },
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercise;
