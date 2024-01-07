import React, {useContext} from 'react';
import {ScrollView, Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Slider from '@react-native-community/slider';
import {IconSize} from '../../../utils/Size';
import {Context} from '../../../context/Context';
import TextFC from '../../Reusable/TextFC';
export default function AdjustModal() {
  const { closeModal} = useContext(Context);
  return (
    <View className="bg-zinc-900 p-2 flex-col gap-y-2 ">
      <View className="flex-row justify-between items-center px-2">
        <Text className="text-lg text-white">Adjust</Text>
        <FontAwesome6
          name="check"
          size={IconSize}
          color="#ffff"
          onPress={() =>
            closeModal({
              adjust: false,
            })
          }
        />
      </View>
      <View>
        <Slider
          style={{height: 40}}
          minimumValue={5}
        
          maximumValue={20}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View className="flex-row justify-around items-start">
        <TouchableOpacity className="flex-col items-center ">
          <Ionicons name="sunny" size={IconSize} color="#ffff" />
          <TextFC>Brightness</TextFC>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center ">
          <Ionicons name="contrast-outline" size={IconSize} color="#ffff" />
          <TextFC>Contrast</TextFC>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center ">
          <Ionicons name="thermometer" size={IconSize} color="#ffff" />
          <TextFC>Contrast</TextFC>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center">
          <Foundation name="mountains" size={IconSize} color="#ffff" />
          <TextFC>Sharpen</TextFC>
        </TouchableOpacity>
      </View>
    </View>
  );
}
