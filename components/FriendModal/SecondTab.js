import React, { useState, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import { getMyFriends } from "../../api/friend";
import FriendProfileTab2 from "../FriendProfile/FriendProfileTab2";

const SecondTab = ({ route }) => {
  const [FriendList, setFriendList] = useState([]);
  const { close } = route.params;
  const getFriendList = async () => {
    const { users } = await getMyFriends();
    setFriendList(users);
  };

  useEffect(() => {
    getFriendList();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {FriendList.map((e) => (
        <FriendProfileTab2 user={e} close={close} />
      ))}
    </View>
  );
};
export default SecondTab;
