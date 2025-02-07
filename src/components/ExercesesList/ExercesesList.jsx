import { useState } from "react";
import { Box, Pagination } from "@mui/material";

import ExerciseCard from "../ExerciseCard/ExerciseCard";

import styles from "./styles";

const ExercesesList = ({ isPending, exercisesList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);

  // Pagination
  const handlePaginationChange = (_, value) => {
    setCurrentPage(value);
  };
  const indexOfLastExercise = currentPage * perPage;
  const indexOfFirstExercise = indexOfLastExercise - perPage;

  //Pagination

  if (isPending) return <Box>Loading...</Box>;

  return (
    <>
      <Box sx={styles.container}>
        {exercisesList
          ?.slice(indexOfFirstExercise, indexOfLastExercise)
          .map((item, index) => (
            <ExerciseCard key={index} {...item} />
          ))}
      </Box>
      <Box sx={styles.pagination}>
        <Pagination
          defaultPage={1}
          count={Math.ceil(exercisesList?.length / perPage)}
          page={currentPage}
          onChange={handlePaginationChange}
          color="secondary"
        />
      </Box>
    </>
  );
};

export default ExercesesList;
