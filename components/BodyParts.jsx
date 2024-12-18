import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { bodyParts } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function BodyParts() {
  const router = useRouter();

  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="text-neutral-700 font-semibold"
      >
        Ejercicios
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartCard item={item} index={index} router={router} />
        )}
      />
    </View>
  );
}

const BodyPartCard = ({ item, router, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <Pressable
        onPress={() => router.push({ pathname: "/excercises", params: item })}
        style={{
          width: wp(44),
          height: wp(52),
        }}
        className="felx justify-end p-4 mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: wp(44),
            height: wp(52),
          }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            width: wp(44),
            height: hp(15),
            start: { x: 0.5, y: 0 },
            end: { x: 0.5, y: 1 },
          }}
          className="rounded-[35px] bottom-0 absolute"
        />

        <Text
          style={{ fontSize: hp(2.3) }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item.name}
        </Text>
      </Pressable>
    </Animated.View>
  );
};
