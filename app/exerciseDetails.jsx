import { View, Text, ScrollView, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

import { Image } from "expo-image";
import Animated from "react-native-reanimated";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

export default function ExerciseDetails() {
  const router = useRouter();
  const { gif, name, instructions, target, equipment, id, secondaryMuscles } =
    useLocalSearchParams();

  return (
    <View className="flex flex-1">
      <View className="rounded-b-[40px] bg-neutral-200 shadow-md">
        <Image
          source={{ uri: gif }}
          style={{ width: wp(100), height: wp(100) }}
          contentFit="cover"
          className="rounded-b-[40px]"
        />
      </View>
      <Pressable
        onPress={() => router.back()}
        className="absolute mx-2 rounded-full right-0 mt-2"
      >
        <Ionicons name="close-circle" size={hp(4.5)} color="#f43f5e" />
      </Pressable>

      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Animated.Text
          style={{ fontSize: hp(3.5) }}
          className="text-neutral-800 font-semibold tracking-wide"
        >
          {name}
        </Animated.Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-800 tracking-wide"
        >
          Equipo:{" "}
          <Text className="text-neutral-800 font-bold">{equipment}</Text>
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-800 tracking-wide"
        >
          Musculos Secundarios:{" "}
          <Text className="text-neutral-800 font-bold">{secondaryMuscles}</Text>
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className="text-neutral-800 tracking-wide"
        >
          Musculo Objetivo:{" "}
          <Text className="text-neutral-800 font-bold">{target}</Text>
        </Text>
        <Text style={{ fontSize: hp(3) }} className="text-neutral-800">
          {instructions.split(",").map((instruction, index) => (
            <Text
              key={instruction}
              style={{ fontSize: hp(1.7) }}
              className="text-neutral-800 "
            >
              <Text className="text-neutral-800 font-bold">
                Paso {index + 1}
              </Text>
              . {instruction}
              {"\n"}
              {"\n"}
            </Text>
          ))}
        </Text>
      </ScrollView>
    </View>
  );
}
