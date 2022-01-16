import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { login } from "../../api/auth";
import request from "../../api/axios";
import { saveJwt } from "../../utils/auth";

export default function App({ navigation }) {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");

  const handleLoginClick = async () => {
    const { status, token } = await login({ loginId, loginPw });
    if (status) {
      Alert.alert(token);
      saveJwt(token);
      request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } else {
      Alert.alert("로그인 실패");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="아이디"
          placeholderTextColor="#003f5c"
          onChangeText={(loginId) => setLoginId(loginId)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="비밀번호"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(loginPw) => setLoginPw(loginPw)}
        />
      </View>

      <TouchableOpacity onPressOut={handleLoginClick} style={styles.loginBtn}>
        <Text style={styles.loginText}>로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
