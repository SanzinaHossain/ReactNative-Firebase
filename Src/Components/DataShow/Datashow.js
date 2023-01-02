import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function Datashow({ name, id, mobile, age }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>ID:{id}</Text>
        <Text>Name:{name}</Text>
        <Text>Age:{age}</Text>
        <Text>Mobile:{mobile}</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    marginHorizontal: 30,
    marginVertical: 40,
    padding: 10,
  },
});
