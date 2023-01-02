import { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { db } from "./db/firestore";
import { collection, getDocs } from "firebase/firestore";
import Datashow from "./Src/Components/DataShow/Datashow";
import AddUser from "./Src/Components/AddUser/AddUser";
export default function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <ScrollView>
      <AddUser />
      {users.map((u, i) => (
        <Datashow
          key={i}
          id={u.id}
          name={u.name}
          mobile={u.mobile}
          age={u.age}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
