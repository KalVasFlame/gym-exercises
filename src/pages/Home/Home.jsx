import {Box} from '@mui/material';

import HeroBanner from '../../components/HeroBanner/HeroBanner';
import SearchExercises from '../../components/SearchExercises/SearchExercises';
import Exercises from '../../components/Exercises/Exercises';

const Home = () => {
  return <Box>
    <HeroBanner />
    <SearchExercises />
    <Exercises />
  </Box>;
};

export default Home;
