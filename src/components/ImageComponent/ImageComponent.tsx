import React, {useContext} from 'react';
import {Image} from 'react-native';
import {Context} from '../../context/Context';

export default function ImageComponent() {
  const {
    borderColor,
    rangeValue,
    selectedImage,
    imageProperty,
    scale,
    bgImage,
  } = useContext(Context);
  console.log(rangeValue.blur);

  return (
    <Image
      blurRadius={rangeValue.blur}
      source={{uri: selectedImage}}
      className={`h-full absolute m-auto left-0 right-0 ${
        imageProperty.width || bgImage ? 'w-3/5 ' : 'w-full'
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
      }}
    />
  );
}
