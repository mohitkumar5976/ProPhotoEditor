import React, {useContext, useState} from 'react';
import {Context} from '../../context/Context';
import {Dimensions, Image, ImageBackground, View} from 'react-native';
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

  const backgroundBlur = visible.bg || visible.adjust ? rangeValue.imageBlur : 0;

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
    <>
      <View
        className="flex-row justify-center"
        style={{
          aspectRatio: `${ratio.width ? ratio.width : 1}/${
            ratio.height ? ratio.height : 1
          }`,
        }}>
        <ImageBackground
          blurRadius={backgroundBlur}
          source={{
            uri: `${backgroundImage ? backgroundImage : selectedImage}`,
          }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderColor: borderColor ? borderColor : 'transparent',
            borderWidth: rangeValue.border,
            transform: [
              {rotateY: `${imageProperty.mirror ? '180deg' : '0deg'}`},
              {rotateX: `${imageProperty.flip ? '180deg' : '0deg'}`},
              {scale: scale},
            ],
          }}>
          <View
            className="w-full h-full absolute"
            style={{
              backgroundColor: `${backGroundColor}`,
            }}></View>
        </ImageBackground>
        <ImageComponent />
      </View>
    </>
  );
}
