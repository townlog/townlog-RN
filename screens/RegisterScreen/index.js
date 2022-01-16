import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { register } from "../../api/auth";

export default function App({ navigation }) {
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [houseName, setHouseName] = useState("");

  const handleRegisterClick = async () => {
    if (loginPw === confirmPw) {
      const { status, token } = await register({
        loginId,
        loginPw,
        nickname,
        houseName,
      });
      if (status) {
        Alert.alert(token);
        navigation.reset({
          index: 0,
          routes: [{ name: "Start" }],
        });
      } else {
        Alert.alert("회원가입 실패");
      }
    } else {
      Alert.alert("비밀번호가 일치하지 않습니다.");
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="비밀번호 확인"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(confirmPw) => setConfirmPw(confirmPw)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="닉네임"
          placeholderTextColor="#003f5c"
          onChangeText={(nickname) => setNickname(nickname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="방 이름"
          placeholderTextColor="#003f5c"
          onChangeText={(houseName) => setHouseName(houseName)}
        />
      </View>

      <TouchableOpacity
        onPressOut={handleRegisterClick}
        style={styles.registerBtn}
      >
        <Text style={styles.loginText}>회원가입</Text>
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

  registerBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
