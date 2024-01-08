import React, {useContext} from 'react';
import {Context} from '../../context/Context';
import {ImageBackground, View} from 'react-native';
import ImageComponent from './ImageComponent';

export default function ImageWrapperComponent() {
  const {
    ratio,
    rangeValue,
    visible,
    selectedImage,
    imageProperty,
    scale,
    bgImage,
  } = useContext(Context);

  const backgroundBlur = visible.bg ? rangeValue.blur : 0;
  const backgroundImage = visible.bg
    ? bgImage
      ? bgImage
      : selectedImage
    : selectedImage;

  return (
    <View
      style={{
        aspectRatio: ratio,
      }}>
      <ImageBackground
        blurRadius={backgroundBlur}
        source={{
          uri: `${backgroundImage}`,
        }}
        className="h-full w-full absolute"
        style={{
          transform: [
            {rotateY: `${imageProperty.mirror ? '180deg' : '0deg'}`},
            {rotateX: `${imageProperty.flip ? '180deg' : '0deg'}`},
            {scale: scale},
          ],
        }}
      />

      <ImageComponent />
    </View>
  );
}
