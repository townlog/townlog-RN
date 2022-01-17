import React from "react";
import { View } from "react-native";
import { createPhoto } from "../../api/furnitures";
import CreateModal from "../CreateModal/CreateMyModal";

const CreateMusicModal = (props) => {
  const { open, close, getMyPhotoList } = props;

  return (
    <View>
      {open ? (
        <CreateModal
          open={open}
          close={close}
          getMyItemList={getMyPhotoList}
          createItem={createPhoto}
        ></CreateModal>
      ) : null}
    </View>
  );
};

export default CreateMusicModal;
