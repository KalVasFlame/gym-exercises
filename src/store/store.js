import { create } from "zustand";

export const useStore = create((set) => ({
  search: "",
  bodyType: "all",
  target: "",
  equipment: "",
  selectedExerciseId: "",
  updateSearch: (newSearch) => set({ search: newSearch }),
  updateBodyType: (newBodyType) => set({ bodyType: newBodyType }),
  updateTarget: (newTarget) => set({ target: newTarget }),
  updateEquipment: (newEquipment) => set({ equipment: newEquipment }),
  updateSelectedExerciseId: (newSelectedExerciseId) =>
    set({ selectedExerciseId: newSelectedExerciseId }),
}));
