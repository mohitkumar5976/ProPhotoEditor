import React, {useContext, useEffect} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {IconSize} from '../../../utils/Size';
import {Context} from '../../../context/Context';
import {backgroundList} from './BackgroundList';

export default function BackgroundModal() {
  const {closeModal, setBgColor, setBgImage} = useContext(Context);

  return (
    <View className="w-full bg-zinc-900 pt-2 px-2 pb-6 flex-col gap-y-2 absolute bottom-0 z-10">
      <View className="flex-row justify-between items-center px-2 pb-3">
        <Text className="text-lg text-white">Background</Text>
        <FontAwesome6
          name="check"
          size={IconSize}
          color="#ffff"
          onPress={() => closeModal('bg')}
        />
      </View>

      <View className="flex-row items-center">
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
    </View>
  );
}
