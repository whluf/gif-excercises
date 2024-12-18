import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ExerciseTimer({ duration = 30 }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const resetTimer = () => {
    setTimeLeft(duration);
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{timeLeft}s</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => setIsRunning(!isRunning)}
          style={[
            styles.button,
            isRunning ? styles.stopButton : styles.startButton,
          ]}
        >
          <Text style={styles.buttonText}>
            {isRunning ? "Pausar" : "Iniciar"}
          </Text>
        </Pressable>
        <Pressable onPress={resetTimer} style={styles.button}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#6c757d",
    minWidth: 100,
    alignItems: "center",
  },
  startButton: {
    backgroundColor: "#28a745",
  },
  stopButton: {
    backgroundColor: "#dc3545",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
