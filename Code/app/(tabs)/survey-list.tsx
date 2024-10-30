import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

import { Survey, SURVEY_LIST } from "@/constants/surveylist";

const SurveyList = () => {
  const router = useRouter();
  const [surveyData, setSurveyData] = useState<Survey[]>([]);
  const colourCodes = {
    ok: "#DAF7A6",
    success: "#FFC300",
    warning: "#FF5733",
    danger: "#C70039",
  };

  const getAdjustedPercentageAndColor = (percentage: number) => {
    if (percentage < 0.25)
      return { adjustedPercentage: 0.25, colour: colourCodes.ok };
    else if (percentage < 0.5)
      return { adjustedPercentage: 0.5, colour: colourCodes.success };
    else if (percentage < 0.75)
      return { adjustedPercentage: 0.75, colour: colourCodes.warning };
    else return { adjustedPercentage: 1, colour: colourCodes.danger };
  };

  useEffect(() => {
    const updatedData = SURVEY_LIST.map((survey) => {
      const percentage = survey.waterused / survey.waterlimit;
      const { adjustedPercentage, colour } =
        getAdjustedPercentageAndColor(percentage);

      survey.adjustedPercentage = adjustedPercentage;
      survey.colour = colour;

      return {
        ...survey,
      };
    });

    setSurveyData(updatedData);
  }, []);

  function gotoDetails(item: any): void {
    const serializedItem = encodeURIComponent(JSON.stringify(item));
    router.push(`/survey-details?item=${serializedItem}`);
  }

  return (
    <View className="flex-1">
      <View style={styles.header} className="mt-10">
        <Text style={styles.headerTitle}>Survey List</Text>
      </View>
      <View className="p-4 mt-1 ">
        <FlatList
          data={SURVEY_LIST}
          className="mb-20"
          keyExtractor={(survey) => survey.id.toString()}
          renderItem={({ item }) => (
            <Pressable className="mb-1" onPress={() => gotoDetails(item)}>
              <View className="p-2 h-20 justify-center rounded-md border-b border-gray-200">
                <Text>Survey Number: {item.surveryNumber}</Text>
                <Text>Name: {item.name}</Text>
              </View>
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
    backgroundColor: "red",
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SurveyList;
