import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";

import { getExercisesList } from "../utils/fetchData";
import { useStore } from "../store/store";

import Hero from "../components/Hero/Hero";
import Search from "../components/Search/Search";
import BodyTypesList from "../components/BodyTypesList/BodyTypesList";
import ExercesesList from "../components/ExercesesList/ExercesesList";

const Home = () => {
  const search = useStore((state) => state.search);
  const bodyType = useStore((state) => state.bodyType);
  const target = useStore((state) => state.target);
  const equipment = useStore((state) => state.equipment);

  const [exercisesList, setExercisesList] = useState([]);
  const { data, isPending } = useQuery({
    queryKey: ["exercises"],
    queryFn: getExercisesList,
  });

  useEffect(() => {
    setExercisesList(data);
  }, [data]);

  useEffect(() => {
    setExercisesList(
      data?.filter(
        (item) =>
          item.name.includes(search) ||
          item.target.includes(search) ||
          item.equipment.includes(search) ||
          item.bodyPart.includes(search)
      )
    );
  }, [search, data]);

  useEffect(() => {
    if (bodyType === "all") {
      return setExercisesList(data);
    }
    setExercisesList(data?.filter((item) => item.bodyPart === bodyType));
  }, [bodyType, data]);

  useEffect(() => {
    if (target) {
      setExercisesList(data?.filter((item) => item.target === target));
    }
  }, [target, data]);

  useEffect(() => {
    if (equipment) {
      setExercisesList(data?.filter((item) => item.equipment === equipment));
    }
  }, [equipment, data]);

  return (
    <Box>
      <Hero />
      <BodyTypesList />
      <Search />
      <ExercesesList isPending={isPending} exercisesList={exercisesList} />
    </Box>
  );
};

export default Home;
