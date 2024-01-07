import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ContextProvider from './src/context/Context';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ContextProvider>
          <RootNavigation />
        </ContextProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
