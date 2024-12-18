import React, { useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

export default function RoutineBuilder({ exercises, onSave }) {
  const [selectedExercises, setSelectedExercises] = useState([]);

  const toggleExercise = (exercise) => {
    if (selectedExercises.some((item) => item.id === exercise.id)) {
      setSelectedExercises((prev) =>
        prev.filter((item) => item.id !== exercise.id)
      );
    } else {
      setSelectedExercises((prev) => [...prev, exercise]);
    }
  };

  const saveRoutine = () => {
    onSave(selectedExercises);
    setSelectedExercises([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Construye tu rutina</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => toggleExercise(item)}
            style={[
              styles.exerciseItem,
              selectedExercises.some((exercise) => exercise.id === item.id) &&
                styles.selectedExercise,
            ]}
          >
            <Text style={styles.exerciseName}>{item.name}</Text>
          </Pressable>
        )}
      />
      <Pressable onPress={saveRoutine} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Guardar Rutina</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  exerciseItem: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f8f9fa",
    marginBottom: 10,
  },
  selectedExercise: {
    backgroundColor: "#cce5ff",
  },
  exerciseName: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
