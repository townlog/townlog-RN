import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { getMyMusics } from "../../api/furnitures";
import MusicItem from "./MusicItem";

const MusicList = (props) => {
  const { musicItems } = props;
  return (
    <View style={styles.container}>
      {musicItems.map((e) => (
        <MusicItem musics={e}></MusicItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default MusicList;
