import React, {useContext} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {IconSize} from '../../../utils/Size';
import {Context} from '../../../context/Context';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {filterDataList} from './FIlterDataList';

export default function FilterModal() {
  const {closeModal, selectedImage,setImageFilterColor} = useContext(Context);
  return (
    <View className="w-full bg-zinc-900 py-4 absolute bottom-0 z-10">
      <View className="flex-row justify-between items-center  mb-8 px-5">
        <Text className="text-lg text-white">Filter</Text>
        <FontAwesome6
          name="check"
          size={IconSize}
          color="#ffff"
          onPress={() => closeModal('filter')}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filterDataList.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              className="mx-2"
              onPress={()=>setImageFilterColor(item.filterColor)}
              style={{width: responsiveWidth(15), height: responsiveHeight(8)}}>
              <ImageBackground
                source={{uri: selectedImage}}
                className="w-full h-full"
              />
              <View
                className="w-full h-full absolute"
                style={{backgroundColor: `${item.filterColor}`}}></View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
