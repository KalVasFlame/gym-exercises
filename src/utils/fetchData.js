import axios from "axios";

const exercisesApiUrl = "https://exercisedb.p.rapidapi.com/exercises";
const youtubeSearchApiUrl = "https://youtube-search-and-download.p.rapidapi.com";

const exercisesOptions = {
  headers: {
    "x-rapidapi-key": "891860a961msh3a2be96da4442b2p1b689cjsn649f58fe94ea",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
  params: {
    limit: "0",
    offset: "0",
  },
};

export const youtubeOptions = {
  headers: {
    "x-rapidapi-key": "891860a961msh3a2be96da4442b2p1b689cjsn649f58fe94ea",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const getBodyPartList = async () => {
  try {
    const response = await axios.get(
      `${exercisesApiUrl}/bodyPartList`,
      exercisesOptions
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getExercisesList = async () => {
  try {
    const response = await axios.get(exercisesApiUrl, exercisesOptions);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getYoutubeVideos = async ({ query }) => {
  try {
    const response = await axios.get(
      `${youtubeSearchApiUrl}/search?query=${query} exercise`,
      youtubeOptions
    );
    return response.data.contents;
  } catch (error) {
    console.log(error);
  }
};

export const getExerciceById = async (id) => {
  try {
    const response = await axios.get(`${exercisesApiUrl}/exercise/${id}`, exercisesOptions);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};