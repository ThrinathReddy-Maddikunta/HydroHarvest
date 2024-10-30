import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

import { MEDITATION_DATA } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161B2E", "#0A4D4A", "#766E67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome User
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            What ever text
          </Text>
        </View>
      </AppGradient>
      <StatusBar style="light" />
      <View className="mb-6">
        <FlatList
          data={MEDITATION_DATA}
          className="mb-20"
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(`/meditate/${item.id}`)}
              className="h-48 my-3 rounded-md overflow-hidden"
            >
              <ImageBackground
                source={MEDITATION_IMAGES[item.id - 1]}
                resizeMode="cover"
                className="flex-1 rounded-lg justify-center"
              >
                <Text>{item.title}</Text>
              </ImageBackground>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
  },
  gradient: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  list: {
    paddingBottom: 150,
  },
});

export default NatureMeditate;
