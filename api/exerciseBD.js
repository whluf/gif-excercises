import { ejercicios } from "../constants/ejercicios";

export const fetchExercisesByBodyPart = async (bodypart) => {
  const filteredData = ejercicios.filter(
    (exercise) => exercise.bodyPart === bodypart
  );
  return filteredData;
};
