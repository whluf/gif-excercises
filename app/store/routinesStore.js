import { create } from "zustand";

export const useRoutinesStore = create((set) => ({
  routines: [],
  addExerciseToRoutine: (exercise) =>
    set((state) => {
      if (state.routines.some((item) => item.id === exercise.id)) {
        return state;
      } else {
        const newRoutine = [...state.routines, exercise];
        return { routines: newRoutine };
      }
    }),
  removeExerciseFromRoutine: (exerciseId) =>
    set((state) => {
      const updatedRoutine = state.routines.filter(
        (exercise) => exercise.id !== exerciseId
      );
      return { routines: updatedRoutine };
    }),
}));
