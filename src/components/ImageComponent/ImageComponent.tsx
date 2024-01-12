import React, {useContext} from 'react';
import {Context} from '../../context/Context';
import {ImageBackground,} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
export default function ImageComponent() {
  const {selectedImage, imageProperty, visible} = useContext(Context);

  let setImageWidth = imageProperty.width || visible.bg;
  return (
    <>
      <ImageBackground
        source={{uri: selectedImage}}
        className={`h-full`}
        style={{
          width: setImageWidth ? responsiveWidth(62) : 0,
        }}></ImageBackground>
    </>
  );
}
