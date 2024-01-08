import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Animated, Image, Text, View} from 'react-native';
import {RootStackNavigatorParamsList} from '../types/navigationTypes';

type Props = StackNavigationProp<RootStackNavigatorParamsList>;

export default function SplashScreen({navigation}: {navigation: Props}) {
  const fadeOut = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeOut, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <>
      <View className="flex-1 items-center justify-center">
        <Animated.View
          style={{opacity: fadeOut}}
          className="flex-col items-center gap-y-1">
          <Image
            style={{width: 110, height: 110}}
            source={{
              uri: `https://play-lh.googleusercontent.com/5Ggwna32iHTwp-U0cGzXAVoEEkd3PxEq2ZJGe_w17NE602aKeeuDhIHWXCZRUar7Ijs=w600-h300-pc0xffffff-pd`,
            }}
          />
          <Text className="text-black text-center text-lg font-bold">
            Pro Photo Editor
          </Text>
        </Animated.View>
      </View>
    </>
  );
}
