import React from "react";
import { StyleSheet, View, Button } from "react-native";

const FirstPage = ({ navigation }) => {
  const moveToLogin = () => {
    navigation.navigate("Login");
  };

  const moveToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <View>
        <Button title="로그인" onPress={moveToLogin} />
        <Button title="회원가입" onPress={moveToRegister} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FirstPage;
