import React, {useContext, useEffect} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import Slider from '@react-native-community/slider';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {IconSize} from '../../../utils/Size';
import {colors} from './BorderCorlorsList';
import {Context} from '../../../context/Context';

export default function BorderModal() {
  const {closeModal, setBorderColor,setRangeValue, handleRangeValue} = useContext(Context);

  useEffect(()=>{
setRangeValue({
  border:5
})
  },[])
  return (
    <View className="w-full bg-zinc-900 p-2 flex-col gap-y-2 absolute bottom-0 z-10">
      <View className="flex-row justify-between items-center px-2">
        <Text className="text-lg text-white">Border</Text>
        <FontAwesome6
          name="check"
          size={IconSize}
          color="#ffff"
          onPress={() => closeModal('border')}
        />
      </View>
      <View>
        <Slider
          style={{height: 40}}
          minimumValue={5}
          onValueChange={e => handleRangeValue('border', e)}
          maximumValue={13}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>

      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {colors.map(item =>
            item.image ? (
              <TouchableOpacity
                key={item.id}
                activeOpacity={1}
                className={`w-12 h-12 flex-row items-center justify-center`}
                onPress={() => setBorderColor('')}>
                <Octicons name="circle-slash" size={35} color="#ffff" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                key={item.id}
                activeOpacity={1}
                className={`w-12 h-12 mx-1 rounded-full`}
                style={{backgroundColor: item.color}}
                onPress={() => setBorderColor(item.color)}></TouchableOpacity>
            ),
          )}
        </ScrollView>
      </View>
    </View>
  );
}
