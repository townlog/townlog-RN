import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";

const Tab = createMaterialTopTabNavigator();
const FriendTab = (props) => {
  const { close } = props;
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="Search"
          component={FirstTab}
          initialParams={{ close }}
        />
        <Tab.Screen name="Friend List" component={SecondTab} />
        <Tab.Screen name="Request" component={ThirdTab} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FriendTab;
