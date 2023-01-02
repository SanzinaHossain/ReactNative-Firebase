import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../../db/firestore";
import { collection, addDoc } from "firebase/firestore";
export default function AddUser() {
  const usersCollectionRef = collection(db, "users");
  const createUser = async () => {
    await addDoc(usersCollectionRef, adduser);
  };
  const [adduser, setAddUser] = useState({
    name: "",
    age: "",
    mobile: "",
  });
  console.log(adduser);
  return (
    <View style={{ marginTop: 50 }}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          //name="Name"
          style={styles.inputText}
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={(text) => setAddUser({ ...adduser, name: text })}
        />

        <Text style={styles.inputLabel}>Age</Text>
        <TextInput
          //name="Age"
          style={styles.inputText}
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={(text) => setAddUser({ ...adduser, age: text })}
        />

        <Text style={styles.inputLabel}>Mobile Number</Text>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={(text) => setAddUser({ ...adduser, mobile: text })}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={createUser}>
          <Text style={styles.buttonText}>Add User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputText: {
    marginHorizontal: 20,
    borderRadius: 5,
    height: 47,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 5,
  },
  inputContainer: {
    marginVertical: 1,
  },
  inputLabel: {
    color: "gray",
    marginHorizontal: 30,
    marginVertical: 5,
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#277603",
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 9,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
  },
});
