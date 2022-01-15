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
const FriendTab = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="SearchFriend" component={FirstTab} />
          <Tab.Screen name="SecondTab" component={SecondTab} />
          <Tab.Screen name="ThirdTab" component={ThirdTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FriendTab;
