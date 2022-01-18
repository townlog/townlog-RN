import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import plus from "../../assets/plus2.png";
import CreateTodoModal from "./CreateTodoModal";
import TodoList from "./TodoList";
import { getTodosbyDate } from "../../api/todo";
import { AntDesign } from "@expo/vector-icons";
import CalendarModal from "./CalendarModal";

const TodoModal = (props) => {
  const { open, close, user, isFriend } = props;

  const today = new Date();
  const todaydate = today.toISOString().split("T")[0];
  const [todoItems, setTodoItems] = useState([]);
  const [pickdate, setPickdate] = useState(todaydate);

  useEffect(() => {
    setPickdate(pickdate);
    getTodoList(pickdate);
  }, []);

  const getTodoList = async (date) => {
    if (user === null) {
      const { todos } = await getTodosbyDate(date, user?.id);
      setTodoItems(todos);
    } else {
      const { todos } = await getTodosbyDate(date, user.id);
      setTodoItems(todos);
    }
  };
  const closeModal = () => {
    setPickdate(todaydate);
    getTodoList(todaydate);
    close();
  };
  const [createTodoModalVisible, setCreateTodoModalVisible] = useState(false);

  const openCreateTodoModal = () => {
    setCreateTodoModalVisible(true);
  };
  const closeCreateTodoModal = () => {
    setCreateTodoModalVisible(false);
  };

  const [openCalendar, setopenCalendar] = useState(false);
  const openCalendarModal = () => {
    setopenCalendar(true);
  };
  const closeCalendarModal = () => {
    setopenCalendar(false);
  };

  return (
    <View>
      {open ? (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={closeModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalTop}>
                  {isFriend ? (
                    <Text style={styles.modalTitle}>
                      {user.nickname}'s List
                    </Text>
                  ) : (
                    <>
                      <Text style={styles.modalTitle}>My Todo List</Text>
                      <TouchableOpacity
                        style={{
                          width: "10%",
                          height: "100%",
                          position: "absolute",
                          right: "0%",
                        }}
                        onPress={openCalendarModal}
                      >
                        <AntDesign
                          name="calendar"
                          size={24}
                          color="black"
                          style={styles.plusimage}
                        />
                      </TouchableOpacity>
                      <CalendarModal
                        open={openCalendar}
                        close={closeCalendarModal}
                        setPickdate={setPickdate}
                        getTodoList={getTodoList}
                      ></CalendarModal>
                    </>
                  )}
                  <Text style={styles.calendarTitle}>{pickdate}</Text>
                </View>
                <View
                  style={{
                    flex: 10,
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <TodoList
                    todoItems={todoItems}
                    user={user}
                    isFriend={isFriend}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={openCreateTodoModal}
                  >
                    <Text style={styles.textStyle}>write</Text>
                  </Pressable>
                  <CreateTodoModal
                    open={createTodoModalVisible}
                    close={closeCreateTodoModal}
                    pickdate={pickdate}
                    getTodoList={getTodoList}
                  ></CreateTodoModal>

                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={closeModal}
                  >
                    <Text style={styles.textStyle}>close</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modalView: {
    flex: 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    height: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: "40%",
    height: "70%",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    marginHorizontal: 10,
  },

  buttonClose: {
    backgroundColor: "lightblue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTop: {
    flex: 2.5,
    width: "100%",
    height: "100%",
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    left: "20%",
    top: "2%",
    color: "lightblue",
  },
  calendarTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: "50%",
    left: "30%",
    color: "lightblue",
  },
  plusimage: {
    height: "100%",
    width: "100%",
    // right: "5%",
    resizeMode: "contain",
    tintColor: "lightblue",
  },
});

export default TodoModal;
