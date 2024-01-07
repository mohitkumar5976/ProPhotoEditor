import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Context} from '../../context/Context';

export default function GalleryButton() {
  const {openImagePicker} = useContext(Context);

  return (
    <TouchableOpacity
      onPress={openImagePicker}
      className="flex-row items-center gap-x-3 pl-2 py-2 pr-3 rounded-lg bg-blue-800 ">
      <FontAwesome name="photo" size={30} color="#ffff" />
      <Text className="text-lg text-white">Take Photo</Text>
    </TouchableOpacity>
  );
}
