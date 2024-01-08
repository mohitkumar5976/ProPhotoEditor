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
            source={require('../utils/logo.webp')}
          />
          <Text className="text-black text-center text-lg font-bold">
           Photo Editor
          </Text>
        </Animated.View>
      </View>
    </>
  );
}
