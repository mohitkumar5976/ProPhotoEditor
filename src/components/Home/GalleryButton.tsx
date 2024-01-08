import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Context} from '../../context/Context';
import ImageCropPicker from 'react-native-image-crop-picker';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigatorParamsList} from '../../types/navigationTypes';

export default function GalleryButton() {
  const {setSelectedImage} = useContext(Context);
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

  const openImagePicker = () => {
    ImageCropPicker.openPicker({
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
    <TouchableOpacity
      onPress={openImagePicker}
      className="flex-row items-center gap-x-3 pl-2 py-2 pr-3 rounded-lg bg-blue-800 ">
      <FontAwesome name="photo" size={30} color="#ffff" />
      <Text className="text-lg text-white">Take from Gallery</Text>
    </TouchableOpacity>
  );
}
