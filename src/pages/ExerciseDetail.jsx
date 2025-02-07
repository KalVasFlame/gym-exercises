import { useQuery } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";

import {
  getExerciceById,
  getYoutubeVideos,
  getExercisesList,
} from "../utils/fetchData";
import { useStore } from "../store/store";

import ExerciseDetailDescription from "../components/ExerciseDetailDescription/ExerciseDetailDescription";
import VideosList from "../components/VideoList/VideosList";
import ExercesesList from "../components/ExercesesList/ExercesesList";

const ExerciseDetail = () => {
  const id = useStore((state) => state.selectedExerciseId);

  const { data: exercise, isPending: isPendingExercise } = useQuery({
    queryKey: ["exercise", id],
    queryFn: () => getExerciceById(id),
  });

  const { data: videos } = useQuery({
    queryKey: ["videos"],
    queryFn: () => getYoutubeVideos({ query: exercise.name }),
  });

  const { data: exercises, isPending: isPendingExercises } = useQuery({
    queryKey: ["exercises"],
    queryFn: getExercisesList,
  });

  if (isPendingExercise) return <Box>Loading...</Box>;
  if (!exercise) return <Box>Exercise not found</Box>;
  return (
    <Box>
      <ExerciseDetailDescription exercise={exercise} />
      <VideosList exerciseVideos={videos} name={exercise?.name} />
      <Typography variant="h4" textAlign={"center"}>
        Similar <span style={{ color: "#FF2625" }}>Equipment </span> Exercises
      </Typography>
      <ExercesesList
        exercisesList={exercises.filter(
          (item) => item.equipment === exercise?.equipment
        )}
        isPending={isPendingExercises}
      />
      <Typography variant="h4" textAlign={"center"}>
        Similar <span style={{ color: "#FF2625" }}>Target </span> Exercises
      </Typography>
      <ExercesesList
        exercisesList={exercises.filter(
          (item) => item.target === exercise?.target
        )}
        isPending={isPendingExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
