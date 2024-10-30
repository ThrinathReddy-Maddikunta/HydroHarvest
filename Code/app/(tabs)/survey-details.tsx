import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Button, LinearProgress } from "react-native-elements";

const SurveyDetails = () => {
  const router = useRouter();
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(decodeURIComponent(item));
  const [waterReleased, setWaterReleased] = useState(false);
  const [connectionDisabled, setConnectionDisabled] = useState(
    parsedItem.disabled
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} className="mt-10">
        <TouchableOpacity onPress={() => router.push(`/survey-list`)}>
          <Icon name="arrow-back" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Survey Details</Text>
      </View>
      <View className="p-4">
        <View className="p-4 bg-blue-200 rounded-lg mb-4">
          <Text className="text-lg font-bold text-left">
            Info on Survey# {parsedItem.surveryNumber}
          </Text>
          <View className="pt-4">
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={{ width: "35%" }}>
                  <Text className="text-base font-bold ">Name:</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text className="text-base font-light ">
                    {parsedItem.name}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ width: "35%" }}>
                  <Text className="text-base font-bold ">Used Water:</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text className="text-base font-light ">
                    {parsedItem.waterused}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ width: "35%" }}>
                  <Text className="text-base font-bold ">Allocated Water:</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text className="text-base font-light ">
                    {parsedItem.waterlimit}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ width: "35%" }}>
                  <Text className="text-base font-bold ">City:</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text className="text-base font-light ">
                    {parsedItem.city}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ width: "35%" }}>
                  <Text className="text-base font-bold ">State:</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text className="text-base font-light ">
                    {parsedItem.state}
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={{ width: "35%" }}>
                  <Text className="text-base font-bold ">Country:</Text>
                </View>
                <View style={{ width: "60%" }}>
                  <Text className="text-base font-light ">
                    {parsedItem.country}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Text className="pt-4 text-base font-bold">
              Water Usage Meter::{" "}
            </Text>
            <LinearProgress
              color={parsedItem.colour}
              trackColor="#CCC"
              value={parsedItem.adjustedPercentage}
              variant="determinate"
              style={styles.progressBar}
            />
          </View>
        </View>
      </View>
      <View className="p-4">
        <Text className="text-lg font-bold mb-4">Actions</Text>
        <View className="flex flex-row flex-wrap mb-4 border p-4 rounded-lg">
          <Button
            title={waterReleased ? "Pause Water" : "Release Water"}
            buttonStyle={
              connectionDisabled ? styles.secondaryButton : styles.primaryButton
            }
            disabled={connectionDisabled}
            onPress={() => setWaterReleased(!waterReleased)}
          />
          {!waterReleased && (
            <Button
              title="Disable Connection"
              buttonStyle={styles.dangerButton}
              onPress={() => setConnectionDisabled(!connectionDisabled)}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
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
  primaryButton: {
    backgroundColor: "#007bff",
    margin: 4,
  },
  secondaryButton: {
    backgroundColor: "#6c757d",
    margin: 4,
  },
  successButton: {
    backgroundColor: "#28a745",
    margin: 4,
  },
  dangerButton: {
    backgroundColor: "#dc3545",
    margin: 4,
  },
  warningButton: {
    backgroundColor: "#ffc107",
    margin: 4,
  },
  infoButton: {
    backgroundColor: "#17a2b8",
    margin: 4,
  },
  progressBar: {
    marginVertical: 4,
    height: 20,
    borderRadius: 5,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  table: {
    margin: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
});

export default SurveyDetails;
