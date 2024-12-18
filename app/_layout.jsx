import "react-native-gesture-handler";

import { View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";

export default function _layout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitle: "",
        headerShadowVisible: false,
        headerBackVisible: false,
        headerLeft: () => (
          <Text
            style={{ fontSize: hp(3), color: "#f43f5e", fontWeight: "bold" }}
          >
            GifCercises
          </Text>
        ),
        headerRight: () => (
          <View className="space-x-3 pt-3 flex flex-row">
            <Pressable
              onPress={() => {
                router.push("notifications");
              }}
            >
              <Ionicons
                name="notifications-outline"
                size={hp(4)}
                color="#f43f5e"
              />
            </Pressable>
            <Pressable>
              <Image
                source={require("../assets/images/avatar.png")}
                style={{ width: hp(4), height: hp(4) }}
                className="rounded-full"
              />
            </Pressable>
          </View>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="excercises"
        options={{
          title: "Ejercicios",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          presentation: "formSheet",
          title: "Notificaciones",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
