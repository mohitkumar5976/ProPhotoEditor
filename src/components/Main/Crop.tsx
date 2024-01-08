import React, {useContext} from 'react';
import TouchableOpacityFC from '../Reusable/TouchableOpacityFC';
import TextFC from '../Reusable/TextFC';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {IconSize} from '../../utils/Size';
import {ToastAndroid} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {Context} from '../../context/Context';

export default function Crop() {
  const {setSelectedImage, selectedImage} = useContext(Context);
  const cropImage = async () => {
    ImageCropPicker.openCropper({
      path: selectedImage,
      width: 300,
      height: 400,
      mediaType: 'photo',
      cropping: true,
    })
      .then(image => {
        ToastAndroid.showWithGravity(
          'Image Cropped',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        setSelectedImage(image.path);
      })
      .catch(err => console.log(err.message));
  };
  return (
    <TouchableOpacityFC handleFun={cropImage}>
      <FontAwesome6 name="crop" size={IconSize} color="#ffff" />
      <TextFC>Crop</TextFC>
    </TouchableOpacityFC>
  );
}
