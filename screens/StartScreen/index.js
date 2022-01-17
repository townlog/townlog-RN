import React from "react";
import { StyleSheet, View, Button } from "react-native";
import request from "../../api/axios";
import { getMe } from "../../api/user";
import { getJwt } from "../../utils/auth";

const FirstPage = ({ navigation }) => {
  React.useEffect(() => {
    (async () => {
      const token = await getJwt();
      if (token) {
        request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const { status } = await getMe();
        if (status) {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }
      }
    })();
    return () => {};
  }, []);

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
