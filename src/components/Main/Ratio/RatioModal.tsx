import React, {Fragment, useContext} from 'react';
import {
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {Context} from '../../../context/Context';
import {IconSize} from '../../../utils/Size';
import TextFC from '../../Reusable/TextFC';

export default function RatioModal() {
  const {closeModal, setRatio} = useContext(Context);
  const handleRatio = (value: number) => {
    setRatio(value);
  };

  const setOriginalImage = () => {
    handleRatio(3 / 4);
    ToastAndroid.show('Original Image', ToastAndroid.SHORT);
  };
  return (
    <Fragment>
      <View className="w-full bg-zinc-900 p-2 flex-col absolute bottom-0 z-10">
        <View className="flex-row justify-between items-center px-2 pb-4 pt-2">
          <Text className="text-lg text-white">Ratio</Text>
          <FontAwesome6
            name="check"
            size={IconSize}
            color="#ffff"
            onPress={() => closeModal('ratio')}
          />
        </View>

        <View className="py-2">
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              className={`w-12 h-12 flex-row items-center justify-center`}
              onPress={setOriginalImage}>
              <Octicons name="circle-slash" size={32} color="#ffff" />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-col items-center w-12"
              onPress={() => handleRatio(1)}>
              <View className="flex-col items-center justify-center p-1 bg-gray-700">
                <AntDesign name="instagram" size={IconSize} color="#ffff" />
                <TextFC>1:1</TextFC>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-col items-center w-12"
              onPress={() => handleRatio(4 / 5)}>
              <View className="flex-col items-center justify-center p-1 bg-gray-700">
                <AntDesign name="instagram" size={IconSize} color="#ffff" />
                <TextFC>4:5</TextFC>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-col items-center w-12"
              onPress={() => handleRatio(9 / 16)}>
              <View className="flex-col items-center justify-center p-1 bg-gray-700">
                <AntDesign name="instagram" size={IconSize} color="#ffff" />
                <TextFC>Story</TextFC>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-col items-center justify-center w-12"
              onPress={() => handleRatio(2 / 3)}>
              <View className="flex-col items-center justify-center p-1 bg-gray-700 h-12">
                <TextFC>2:3</TextFC>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-col items-center justify-center w-12"
              onPress={() => handleRatio(3 / 2)}>
              <View className="flex-col items-center justify-center p-1 bg-gray-700 w-12">
                <TextFC>3:2</TextFC>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-col items-center justify-center w-12"
              onPress={() => handleRatio(9 / 16)}>
              <View className="flex-col items-center justify-center p-0.5 bg-gray-700 h-12">
                <TextFC>9:16</TextFC>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-col items-center justify-center w-12"
              onPress={() => handleRatio(16 / 9)}>
              <View className="flex-col items-center justify-center p-1 bg-gray-700 w-12">
                <TextFC>16:9</TextFC>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Fragment>
  );
}
