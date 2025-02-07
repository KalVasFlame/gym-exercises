/* eslint no-eval: 0 */
import { Link } from "react-router-dom";
import { Box, Chip, Typography } from "@mui/material";

import chipsData from "./chipsData";
import { useStore } from "../../store/store";

import styles from "./styles";

const ExerciseCard = ({ name, gifUrl, bodyPart, target, equipment, id }) => {
  const updateTarget = useStore((state) => state.updateTarget);
  const updateEquipment = useStore((state) => state.updateEquipment);
  const updateBodyType = useStore((state) => state.updateBodyType);
  const updateSelectedExerciseId = useStore(
    (state) => state.updateSelectedExerciseId
  );

  return (
    <Box key={id} sx={styles.item}>
      <Link to={`/exercise/${id}`} onClick={() => updateSelectedExerciseId(id)}>
        <Box>
          <Typography variant="h6" textTransform="capitalize">
            {name.slice(0, 35)}
          </Typography>
          <Box>
            <img src={gifUrl} alt={name} width={330} height={330} />
          </Box>
        </Box>
      </Link>

      <Box sx={styles.chipsContainer}>
        {chipsData.map(({ label, color }, index) => (
          <Chip
            onClick={() => {
              if (label === "target") {
                updateTarget(target);
              } else if (label === "equipment") {
                updateEquipment(equipment);
              } else if (label === "bodyPart") {
                updateBodyType(bodyPart);
              }
            }}
            sx={[styles.chip, styles[color + "Chip"]]}
            key={index}
            label={eval(label)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ExerciseCard;
