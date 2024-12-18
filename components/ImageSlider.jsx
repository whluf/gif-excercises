import { View, Text, Image } from "react-native";
import React from "react";

import Carousel from "react-native-reanimated-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { sliderImages } from "../constants";

export default function ImageSlider() {
  return (
    <Carousel
      data={sliderImages}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}
      autoPlay={true}
      renderItem={({ item, index }) => (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            key={index}
            source={item}
            style={{
              resizeMode: "cover",
              width: wp("100"),
              height: hp("25"),
              borderRadius: 30,
            }}
          />
        </View>
      )}
      width={wp("100")}
      height={hp("25")}
      autoPlayInterval={4000}
    />
  );
}
