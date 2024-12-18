import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useRoutinesStore } from "../store/routinesStore";
import { useRouter } from "expo-router";

export default function Routine() {
  const { routines, removeExerciseFromRoutine } = useRoutinesStore();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Rutina</Text>
      {routines.length === 0 ? (
        <Text style={styles.noData}>Aún no has agregado ejercicios.</Text>
      ) : (
        <FlatList
          data={routines}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/exerciseDetails",
                  params: {
                    id: item.id,
                    name: item.name,
                    equipment: item.equipment,
                    target: item.target,
                    instructions: item.instructions,
                  },
                })
              }
              style={styles.routineItem}
            >
              <Text style={styles.exerciseName}>{item.name}</Text>
              <Pressable
                onPress={() => removeExerciseFromRoutine(item.id)}
                style={styles.removeButton}
              >
                <Text style={styles.removeButtonText}>Eliminar</Text>
              </Pressable>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  noData: {
    fontSize: 16,
    color: "#6c757d",
  },
  routineItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 16,
    color: "#007bff",
    textDecorationLine: "underline",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 8,
  },
  removeButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
