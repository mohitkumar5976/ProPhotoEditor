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
    imageFilterColor,
    bgImage,
    borderColor,
  } = useContext(Context);

  const backgroundBlur = visible.bg || visible.adjust? rangeValue.blur : 0;
  const backgroundImage = visible.bg
    ? bgImage
      ? bgImage
      : selectedImage
    : selectedImage;
  let backGroundColor =
    (rangeValue.saturation && `hsla(360,100%,100%,${rangeValue.saturation})`) ||
    (rangeValue.brightness && `rgba(0,0,0,${rangeValue.brightness})`) ||
    imageFilterColor;
  return (
    <View
      style={{
        aspectRatio: ratio,
        borderColor: borderColor,
        borderWidth: rangeValue.border,
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
      <View
        className="w-full h-full absolute"
        style={{
          backgroundColor: `${backGroundColor}`,
        }}></View>
      <ImageComponent />
    </View>
  );
}
