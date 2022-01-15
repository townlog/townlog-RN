import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import FriendProfileTab3 from "../FriendProfile/FriendProfileTab3";

const ThirdTab = () => {
  const [requestList, setrequestList] = useState([]);

  const getRequestList = async () => {
    const { pending } = await getFriendRequest();
    setrequestList(pending);
  };

  useEffect(() => {
    getRequestList();
  }, []);
  return (
    <View>
      {requestList.map((e) => (
        <FriendProfileTab3 key={e.id} user={e} position="absolute" bottom="0" />
      ))}
    </View>
  );
};
export default ThirdTab;
