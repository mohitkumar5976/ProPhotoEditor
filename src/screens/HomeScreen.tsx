import React from 'react';
import {SafeAreaView, View} from 'react-native';
import CameraButton from '../components/Home/CameraButton';
import GalleryButton from '../components/Home/GalleryButton';
export default function HomeScreen() {
  return (
    <>
      <SafeAreaView className="flex-1 flex-row items-center justify-center">
        <View className="flex-col items-center">
          <CameraButton />
          <GalleryButton />
        </View>
      </SafeAreaView>
    </>
  );
}
