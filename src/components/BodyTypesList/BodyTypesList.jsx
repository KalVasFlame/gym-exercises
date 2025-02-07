import { List, ListItem, Typography, Box } from "@mui/material";

import { useQuery } from "@tanstack/react-query";

import { useStore } from "../../store/store";
import { getBodyPartList } from "../../utils/fetchData";

import gymIcon from "../../assets/icons/gym.png";
import styles from "./styles";

const BodyTypesList = () => {
  const updateBodyType = useStore((state) => state.updateBodyType);
  const { data, isPending } = useQuery({
    queryKey: ["bodyParts"],
    queryFn: getBodyPartList,
  });

  if (isPending) return <Box>Loading...</Box>;

  return (
    <List sx={styles.list}>
      {["all", ...data].map((item, index) => (
        <ListItem
          sx={styles.listItem}
          key={index}
          onClick={() => updateBodyType(item)}
        >
          <img
            src={gymIcon}
            alt={item}
            width={50}
            height={50}
            loading="lazy"
          />
          <Typography textTransform="capitalize" sx={styles.listItemText}>
            {item}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default BodyTypesList;
