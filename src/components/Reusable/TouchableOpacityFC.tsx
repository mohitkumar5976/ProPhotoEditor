import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

type TouchableOpacityFCProps = {
  children: ReactNode;
  handleFun?: () => void;
};

export default function TouchableOpacityFC({
  children,handleFun
}: TouchableOpacityFCProps) {
  return (
    <TouchableOpacity
      className=" bg-zinc-900 py-2"
      style={{width:responsiveWidth(18)}}
      activeOpacity={0.7} 
      onPress={handleFun}>
     <View className="flex-col items-center">
      {children}
     </View>
    </TouchableOpacity>
  );
}
