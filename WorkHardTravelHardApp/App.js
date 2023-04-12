import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { theme } from "./colors";
import { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const TODO_LIST_STORAGE_KEY = "@toDosList";
const TODO_STATUS_STORAGE_KEY = "@toDoStatus";

// Challenge1 : Remain to dos when you change working/traveling

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  const travel = async () => {
    setWorking(false);
    await AsyncStorage.setItem(TODO_STATUS_STORAGE_KEY, "false");
  };
  const work = async () => {
    setWorking(true);
    await AsyncStorage.setItem(TODO_STATUS_STORAGE_KEY, "true");
  };
  const onChangeText = (payload) => setText(payload);
  const saveToDos = async (toSave) => {
    try {
      await AsyncStorage.setItem(TODO_LIST_STORAGE_KEY, JSON.stringify(toSave));
    } catch (e) {
      console.log(e);
    }
  };
  const loadToDos = async () => {
    try {
      const toDos = await AsyncStorage.getItem(TODO_LIST_STORAGE_KEY);
      if (toDos !== null) {
        setToDos(JSON.parse(toDos));
      }
      const status = await AsyncStorage.getItem(TODO_STATUS_STORAGE_KEY);
      setWorking("true" === status);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadToDos();
  }, []);

  const addToDo = async () => {
    if (text === "") return;
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working, finished: false },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  const deleteToDo = async (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      {
        text: "Cancel",
      },
      {
        text: "I'm Sure",
        onPress: async () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          await saveToDos(newToDos);
        },
      },
    ]);
  };

  //Challenge2 : Add a check button to each to do
  const finishToDo = async (key) => {
    const newToDos = { ...toDos };
    newToDos[key].finished = !newToDos[key].finished;
    setToDos(newToDos);
    await saveToDos(newToDos);
  };
  //Challenge3 : Add a Edit ToDo Name Button to each to do
  const [editToDoKey, setEditToDoKey] = useState(null);
  const [editToDoText, setEditToDoText] = useState("");
  const textInputRef = useRef(null);

  const editToDo = async (key) => {
    setEditToDoKey(key);
    setEditToDoText(toDos[key].text);
  };

  const onChangeEditToDo = (payload) => {
    setEditToDoText(payload);
  };

  const saveEditToDo = async () => {
    const newToDos = { ...toDos };
    newToDos[editToDoKey].text = editToDoText;
    setToDos(newToDos);
    await saveToDos(newToDos);
    setEditToDoKey(null);
    setEditToDoText("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{
              ...styles.btnsText,
              color: working ? "white" : theme.grey,
            }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnsText,
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          onSubmitEditing={() => addToDo()}
          onChangeText={(e) => onChangeText(e)}
          returnKeyType={"done"}
          placeholder={working ? "Add a To Do?" : "Where do you want to go?"}
          style={styles.input}
        />
        <ScrollView>
          {Object.keys(toDos).map((key) =>
            toDos[key].working === working ? (
              <View
                style={key === editToDoKey ? styles.toDoEditing : styles.toDo}
                key={key}
              >
                {key === editToDoKey ? (
                  <TextInput
                    style={styles.toDoText}
                    onChangeText={(e) => onChangeEditToDo(e)}
                    value={editToDoText}
                    returnKeyType={"done"}
                    onSubmitEditing={() => saveEditToDo()}
                    autoFocus={true}
                  />
                ) : (
                  <Text
                    style={
                      toDos[key].finished
                        ? styles.toDoTextFinished
                        : styles.toDoText
                    }
                  >
                    {toDos[key].text}
                  </Text>
                )}
                <View style={styles.toDoControlBox}>
                  <TouchableOpacity onPress={() => finishToDo(key)}>
                    <Fontisto
                      name={
                        toDos[key].finished
                          ? "checkbox-active"
                          : "checkbox-passive"
                      }
                      size={18}
                      color={theme.grey}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => editToDo(key)}
                    style={{ marginHorizontal: 7 }}
                  >
                    <FontAwesome name="pencil" size={18} color={theme.grey} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteToDo(key)}>
                    <Fontisto name="trash" size={18} color={theme.grey} />
                  </TouchableOpacity>
                </View>
              </View>
            ) : null
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnsText: {
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toDoEditing: {
    backgroundColor: theme.toDoEditingBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  toDoTextFinished: {
    color: theme.grey,
    fontSize: 16,
    fontWeight: "500",
    textDecorationLine: "line-through",
  },
  toDoControlBox: {
    flexDirection: "row",
  },
});
