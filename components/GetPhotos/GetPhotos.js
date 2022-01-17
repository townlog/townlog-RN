import * as MediaLibrary from "expo-media-library";
import React from "react";
import { Button, View } from "react-native";

const GetPhotos = () => {
  const getPermission = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    const { assets } = await MediaLibrary.getAssetsAsync({
      mediaType: ["photo"],
    });
    
  };

  return <View></View>;
};
export default GetPhotos;
