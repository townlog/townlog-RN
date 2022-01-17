import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import PhotoItem from "./PhotoItem";

const PhotoList = (props) => {
  const { photoItems } = props;
  return (
    <View style={styles.container}>
      {photoItems.map((e) => (
        <PhotoItem key={e.id} photos={e}></PhotoItem>
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
export default PhotoList;
