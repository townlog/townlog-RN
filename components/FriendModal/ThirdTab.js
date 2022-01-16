import React, { useState, useEffect } from "react";
import { Alert, Text, View } from "react-native";
import FriendProfileTab3 from "../FriendProfile/FriendProfileTab3";
import { getFriendRequest } from "../../api/friend";

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
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      {requestList.map((e) => (
        <FriendProfileTab3
          key={e.id}
          user={e}
          getRequestList={getRequestList}
        />
      ))}
    </View>
  );
};
export default ThirdTab;
