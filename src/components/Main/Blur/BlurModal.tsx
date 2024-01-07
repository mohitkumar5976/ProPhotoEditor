import React, {useContext} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Slider from '@react-native-community/slider';
import {IconSize} from '../../../utils/Size';
import {Context} from '../../../context/Context';
export default function BlurModal() {
  const {closeModal, handleRangeValue} = useContext(Context);

  return (
    <>
      <View className="w-full bg-zinc-900 pt-2 px-2 pb-8 flex-col gap-y-2 absolute bottom-0 z-10">
        <View className="flex-row justify-between items-center px-2 pb-4">
          <Text className="text-lg text-white">Blur</Text>
          <FontAwesome6
            name="check"
            size={IconSize}
            color="#ffff"
            onPress={() => closeModal('blur')}
          />
        </View>
        <View>
          <Slider
            minimumValue={0}
            onValueChange={e => handleRangeValue('blur', e)}
            maximumValue={20}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
      </View>
    </>
  );
}
