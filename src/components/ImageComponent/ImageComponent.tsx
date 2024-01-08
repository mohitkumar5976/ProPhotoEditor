import React, {useContext} from 'react';
import {Context} from '../../context/Context';
import {ImageBackground, View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
export default function ImageComponent() {
  const {
    borderColor,
    rangeValue,
    selectedImage,
    imageProperty,
    scale,
    visible,
    imageFilterColor,
  } = useContext(Context);

  let backGroundColor =
    (rangeValue.saturation && `hsla(360,100%,100%,${rangeValue.saturation})`) ||
    (rangeValue.brightness && `rgba(0,0,0,${rangeValue.brightness})`) ||
    imageFilterColor;
  let setImageWidth = imageProperty.width || visible.blur || visible.bg;
  return (
    <>
      <ImageBackground
        blurRadius={rangeValue.imageBlur}
        source={{uri: selectedImage}}
        className={`h-full mx-auto `}
        style={{
          width: setImageWidth ? responsiveWidth(62) : 0,
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
            backgroundColor: `${backGroundColor}`,
          }}></View>
      </ImageBackground>
    </>
  );
}
