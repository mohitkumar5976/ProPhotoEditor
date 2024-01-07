import React, {useContext} from 'react';
import {Context} from '../../context/Context';
import {ImageBackground, View} from 'react-native';
import ImageComponent from './ImageComponent';

export default function ImageWrapperComponent() {
  const {ratio, bgColor, bgImage} = useContext(Context);

  return (
    <View
      className={`bg-zinc-800 relative`}
      style={{
        aspectRatio: ratio,
        backgroundColor: bgColor,
      }}>
      <ImageBackground
        source={{
          uri: bgImage,
        }}
        className="w-full h-full absoulte "
      />

      <ImageComponent />
    </View>
  );
}
