import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Context} from '../../context/Context';

export default function CameraButton() {
  const {handleCameraLaunch} = useContext(Context);

  return (
    <>
      <TouchableOpacity
        onPress={handleCameraLaunch}
        className="flex-row items-center mb-2 gap-x-3 pl-2 py-2 pr-3 rounded-lg bg-blue-800 ">
        <Feather name="camera" size={30} color="#ffff" />
        <Text className="text-lg text-white">Take Photo</Text>
      </TouchableOpacity>
    </>
  );
}
