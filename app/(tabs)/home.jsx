import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ImageSlider from "../../components/ImageSlider";
import BodyParts from "../../components/BodyParts";

export default function Home() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white space-y-5">
      <StatusBar style="dark" />

      {/* punchline and avatar */}
      <View className=" justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(2.5) }}
            className="text-neutral-700 pt-3 font-bold tracking-wider "
          >
            LISTO PARA{" "}
            <Text
              style={{ fontSize: hp(3) }}
              className="text-rose-500 font-bold tracking-wider "
            >
              ENTRENAR
            </Text>
          </Text>
        </View>
      </View>

      {/* image slider */}
      <View style={{ height: hp(23) }}>
        <ImageSlider />
      </View>

      {/* body parts list */}
      <View style={{ flex: 1 }}>
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}
