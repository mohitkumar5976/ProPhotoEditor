import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {RootStackNavigatorParamsList} from '../types/navigationTypes';

type Props = StackNavigationProp<RootStackNavigatorParamsList>;

export default function SplashScreen({navigation}: {navigation: Props}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);

  return (
    <>
      <Text>Splash Screen</Text>
    </>
  );
}
