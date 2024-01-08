import React, {useContext} from 'react';
import {Context} from '../../context/Context';
import {ImageBackground, View} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
export default function ImageComponent() {
  const {
    rangeValue,
    selectedImage,
    imageProperty,
    visible,setSelectedImage
  } = useContext(Context);

 
  let setImageWidth = imageProperty.width || visible.blur || visible.bg;
  return (
    <>
      <ImageBackground
        blurRadius={rangeValue.imageBlur}
        source={{uri: selectedImage}}
        className={`h-full mx-auto `}
        style={{
          width: setImageWidth ? responsiveWidth(62) : 0,
       
        }}>
       
      </ImageBackground>
    </>
  );
}
