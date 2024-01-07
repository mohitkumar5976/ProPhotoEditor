import React, {useContext} from 'react';
import {Context} from '../../context/Context';
import {ImageBackground, View} from 'react-native';
export default function ImageComponent() {
  const {
    borderColor,
    rangeValue,
    selectedImage,
    imageProperty,
    scale,
    bgImage,
    visible,
  } = useContext(Context);
  return (
    <>
      <ImageBackground
        blurRadius={rangeValue.imageBlur}
        source={{uri: selectedImage}}
        className={`h-full absolute ${
          imageProperty.width || bgImage || visible.blur ? 'w-3/5 ' : 'w-full '
        }`}
        style={{
          borderColor: `${
            borderColor.length !== 0 ? borderColor : 'transparent'
          }`,
          borderWidth: rangeValue.border,
          transform: [
            {rotateY: `${imageProperty.mirror ? '180deg' : '0deg'}`},
            {rotateX: `${imageProperty.flip ? '180deg' : '0deg'}`},
            {scale: scale},
          ],
        }}>
        <View
          className="w-full h-full"
          style={{
            backgroundColor: `${
              rangeValue.brightness
                ? `rgba(0,0,0,${rangeValue.brightness})`
                : rangeValue.saturation
                ? `hsla(360, 100%, 100%, ${rangeValue.saturation})`
                : null
            }`,
          }}></View>
      </ImageBackground>
    </>
  );
}
