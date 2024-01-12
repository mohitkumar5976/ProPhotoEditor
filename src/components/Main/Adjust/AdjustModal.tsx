import React, {useContext} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import {IconSize} from '../../../utils/Size';
import {Context} from '../../../context/Context';
import Entypo from 'react-native-vector-icons/Entypo';
export default function AdjustModal() {
  const {closeModal, handleRangeValue, rangeValue} = useContext(Context);

  return (
    <View className="w-full bg-zinc-900 p-2 flex-col gap-y-2 absolute bottom-0 z-10">
      <View className="flex-row justify-between items-center px-3">
        <Text className="text-lg text-white">Adjust</Text>
        <FontAwesome6
          name="check"
          size={IconSize}
          color="#ffff"
          onPress={() => closeModal('adjust')}
        />
      </View>

      <View className="px-3">
        <View>
          <Text className="text-center text-white">Brightness</Text>
          <View className="flex-row items-center gap-x-4 ">
            <Ionicons name="sunny" size={IconSize} color="#ffff" />

            <View className="w-5/6">
              <Slider
                style={{height: 40}}
                minimumValue={0}
                onValueChange={e => handleRangeValue('brightness', e)}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
            </View>
          </View>
        </View>
        <View>
          <Text className="text-center text-white">Blur</Text>
          <View className="flex-row items-center gap-x-4 ">
            <Entypo name="drop" size={IconSize} color="#ffff" />
            <View className="w-5/6">
              <Slider
                style={{height: 40}}
                minimumValue={0}
                onValueChange={e => handleRangeValue('blur', e)}
                maximumValue={5}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
            </View>
          </View>
        </View>
        <View>
          <Text className="text-center text-white">Saturation</Text>

          <View className="flex-row items-center gap-x-4 ">
            <Ionicons name="thermometer" size={IconSize} color="#ffff" />
            <View className="w-11/12">
              <Slider
                style={{height: 40}}
                minimumValue={0}
                onValueChange={e => handleRangeValue('saturation', e)}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
