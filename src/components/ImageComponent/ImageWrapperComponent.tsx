import React, {useContext} from 'react';
import {Context} from '../../context/Context';
import {ImageBackground, View} from 'react-native';
import ImageComponent from './ImageComponent';

export default function ImageWrapperComponent() {
  const {ratio, rangeValue, visible, setSelectedImage, selectedImage, bgImage} =
    useContext(Context);

  const handleBackgroundImage = (bgImage: string) => {
    setSelectedImage(bgImage);
    return bgImage;
  };
  return (
    <View
      className="flex-col items-center justify-center relative"
      style={{
        aspectRatio: ratio,
      }}>
      {visible.blur ? (
        <ImageBackground
          blurRadius={rangeValue.blur}
          source={{
            uri: selectedImage
          }}
          className="h-full w-full absolute"
          resizeMode='cover'
        />
      ) : null}
      {visible.bg ? (
        <ImageBackground
          source={{
            uri: visible.bg
              ? bgImage.length !== 0
                ? handleBackgroundImage(bgImage)
                : selectedImage
              : selectedImage,
          }}
          resizeMode='cover'
          className="h-full w-full absolute"
        />
      ) : null}

      <ImageComponent />
    </View>
  );
}
