import React, {useContext} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {IconSize} from '../../../utils/Size';
import {Context} from '../../../context/Context';
import {backgroundList} from './BackgroundList';
import Slider from '@react-native-community/slider';

export default function BackgroundModal() {
  const {closeModal, setBgImage, handleRangeValue} = useContext(Context);

  return (
    <View className="w-full bg-zinc-900 pt-2 pb-5 flex-col gap-y-2 absolute bottom-0 z-10">
      <View className="flex-row justify-between items-center  px-3 pb-3">
        <Text className="text-lg text-white">Background</Text>
        <FontAwesome6
          name="check"
          size={IconSize}
          color="#ffff"
          onPress={() => closeModal('bg')}
        />
      </View>

      <View className="flex-row items-center px-2">
        <TouchableOpacity
          activeOpacity={1}
          className={`w-12 h-12 flex-row items-center justify-center`}
          onPress={() => setBgImage('')}>
          <Octicons name="circle-slash" size={35} color="#ffff" />
        </TouchableOpacity>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {backgroundList.map(item => (
            <TouchableOpacity
              className="mx-1"
              key={item.id}
              onPress={() => setBgImage(`${item.bgImage}`)}>
              <Image
                source={{uri: item.bgImage}}
                className="w-12 h-12 rounded-full "
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View className="flex-row justify-between items-center px-3 pt-2">
        <Text className="text-lg text-white">Blur</Text>
      </View>
      <View>
        <Slider
          minimumValue={0}
          onValueChange={e => handleRangeValue('blur', e)}
          maximumValue={8}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
    </View>
  );
}
