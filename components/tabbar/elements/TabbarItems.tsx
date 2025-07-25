import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapIcon from "../../../icons/MapIcon";
import ListIcon from "../../../icons/ListIcon";
import TrapezoidBackground from "./TrapezoidBackground";

const TabbarItems = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 32,
      }}
    >
      <MapIcon />
      <TrapezoidBackground />
      <ListIcon />
    </View>
  );
};

export default TabbarItems;

const styles = StyleSheet.create({});
