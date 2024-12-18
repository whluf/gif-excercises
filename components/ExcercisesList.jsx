import { Text, View, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Asset } from "expo-asset";

export default function ExcercisesList({ data }) {
  const router = useRouter();
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <ExcerciseCard
            item={item}
            image={Asset.fromModule(item.gifPath).uri}
            router={router}
            index={index}
          />
        )}
      />
    </View>
  );
}

const ExcerciseCard = ({ item, router, image, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
      className="mx-auto"
    >
      <Pressable
        onPress={() => {
          console.log(item);
          router.push({
            pathname: "/exerciseDetails",
            params: {
              name: item.name,
              id: item.id,
              equipment: item.equipment,
              target: item.target,
              instructions: item.instructions,
              secondaryMuscles: item.secondaryMuscles,
              gif: image,
            },
          });
        }}
        className="flex py-3 space-y-2"
      >
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{ uri: image }}
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{ fontSize: hp(1.7) }}
          className="text-neutral-700 font-semibold ml-1 tracking-wide"
        >
          {item.name?.length > 20 ? item.name.slice(0, 15) + "..." : item.name}
        </Text>
      </Pressable>
    </Animated.View>
  );
};
