import React, { useState } from "react";
import { View, StyleSheet, Modal, Text, Pressable, Alert } from "react-native";
import { Calendar } from "react-native-calendars";

export const CalendarModal = (props) => {
  const { open, close, setPickdate, getTodoList } = props;

  const dayPressHandler = (day) => {
    setPickdate(day);
    getTodoList(day);
    close();
  };
  return (
    <View>
      {open ? (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={close}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Calendar
                  onDayPress={({ dateString }) => {
                    dayPressHandler(dateString);
                  }}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={close}
                >
                  <Text style={styles.textStyle}>close</Text>
                </Pressable>
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
  },

  modalView: {
    flex: 0.5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "lightblue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  calendar: {
    width: "100%",
    height: "100%",
  },
});

export default CalendarModal;
