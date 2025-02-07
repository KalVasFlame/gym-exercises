import { Typography, Stack, Chip } from "@mui/material";

import styles from "./styles";

const ExerciseDetailDescription = ({ exercise }) => {
  return (
    <Stack sx={styles.container}>
      <Typography variant="h4" textTransform="capitalize">
        {exercise.name}
      </Typography>
      <img src={exercise.gifUrl} alt={exercise.name} />
      <Stack>
        <Typography variant="h5">Instructions:</Typography>
        {exercise?.instructions?.map((item, index) => (
          <Typography variant="p" key={index}>
            {index + 1}. {item}
          </Typography>
        ))}
      </Stack>
      <Stack sx={styles.secondaryMusclesContainer}>
        <Typography variant="h6">Secondary Muscles:</Typography>
        {exercise?.secondaryMuscles?.map((item, index) => (
          <Chip color="secondary" key={index} label={item} />
        ))}
      </Stack>
      <Stack sx={styles.chipsContainer}>
        <Typography variant="p">Target:</Typography>
        <Chip color="primary" label={exercise.target} />
        <Typography variant="p">Body Part:</Typography>
        <Chip color="primary" label={exercise.bodyPart} />
        <Typography variant="p">Equipment:</Typography>
        <Chip color="primary" label={exercise.equipment} />
      </Stack>
    </Stack>
  );
};

export default ExerciseDetailDescription;
