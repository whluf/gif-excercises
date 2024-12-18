import { Image, Pressable, StatusBar, Text, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { fetchExercisesByBodyPart } from "../api/exerciseBD";
import { Ionicons } from "@expo/vector-icons";

import ExcersisesList from "../components/ExcercisesList";

export default function Excercises() {
  const [exercises, setEcercises] = useState([]);
  const router = useRouter();
  const item = useLocalSearchParams();

  useEffect(() => {
    if (item) getExercises(item.name);
  }, []);

  const getExercises = async (bodyPart) => {
    const exercises = await fetchExercisesByBodyPart(bodyPart);
    setEcercises(exercises);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <Pressable
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 absolute rounded-full flex justify-center items-center pr-1"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back" size={hp(4)} color="white" />
      </Pressable>

      {/* excercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="text-neutral-700 font-semibold"
        >
          Ejercicios de {item.name}
        </Text>
      </View>
      <View className="mb-10">
        <ExcersisesList data={exercises} />
      </View>
    </ScrollView>
  );
}
