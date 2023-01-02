import { collection, updateDoc, doc, deleteDoc } from "firebase/firestore";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { db } from "../../../db/firestore";

export default function Datashow({ name, id, mobile, age }) {
  const usersCollectionRef = collection(db, "users");
  const updateuser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newage = { age: age + 1 };
    await updateDoc(userDoc, newage);
    alert("update age successfully");
  };
  const Deleteuser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    alert("deleted data successfully");
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>ID:{id}</Text>
        <Text>Name:{name}</Text>
        <Text>Age:{age}</Text>
        <Text>Mobile:{mobile}</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => updateuser(id, age)}
        >
          <Text style={styles.buttonText}>Update Age</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => Deleteuser(id)}
        >
          <Text style={styles.buttonText}>Delete User</Text>
        </TouchableOpacity>
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
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#666666",
    padding: 3,
    marginHorizontal: 50,
    borderRadius: 9,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
  },
});
