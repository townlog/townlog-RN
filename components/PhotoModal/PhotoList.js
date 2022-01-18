import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import PhotoItem from "./PhotoItem";

const PhotoList = (props) => {
  const { photoItems, user, photoModalclose } = props;
  return (
    <View style={styles.container}>
      {photoItems.map((e) => (
        <PhotoItem
          key={e.id}
          photo={e}
          user={user}
          photoModalclose={photoModalclose}
        ></PhotoItem>
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
  },
});
export default PhotoList;
