import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Context} from '../../context/Context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigatorParamsList} from '../../types/navigationTypes';
import ImageCropPicker from 'react-native-image-crop-picker';

export default function CameraButton() {
  const {setSelectedImage} = useContext(Context);
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();
  const handleCameraLaunch = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      mediaType: 'photo',
      cropping: true,
    })
      .then(image => {
        setSelectedImage(image.path);
        navigation.navigate('Main');
      })
      .catch(err => console.log(err.message));
  };

  return (
    <>
      <TouchableOpacity
        onPress={handleCameraLaunch}
        className="flex-row items-center mb-2 gap-x-3 pl-2 py-2 pr-3 rounded-lg bg-blue-800 ">
        <Feather name="camera" size={30} color="#ffff" />
        <Text className="text-lg text-white">Take from Camera</Text>
      </TouchableOpacity>
    </>
  );
}
