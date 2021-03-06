import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import StartScreen from "./screens/StartScreen";
import HomeScreen from "./screens/HomeScreen";
import MyRoomScreen from "./screens/MyRoomScreen";
import FriendRoomScreen from "./screens/FriendRoomScreen";
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MyRoom" component={MyRoomScreen} />
          <Stack.Screen name="FriendRoom" component={FriendRoomScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
