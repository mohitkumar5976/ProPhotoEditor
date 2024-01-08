import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackNavigatorParamsList } from '../types/navigationTypes';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator<RootStackNavigatorParamsList>();
export default function RootNavigation() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Splash" component={SplashScreen} options={
        {
          headerShown:false
        }
      }/> */}
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerShown:false
      }}/>
        <Stack.Screen name="Main" component={MainScreen} options={{
        headerShown:false
      }}/>
    </Stack.Navigator>
  );
}
