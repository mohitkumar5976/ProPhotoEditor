import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackNavigatorParamsList} from '../types/navigationTypes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Border from '../components/Main/Border/Border';
import Ratio from '../components/Ratio/Ratio';
import Crop from '../components/Main/Crop';
import Filter from '../components/Main/Filter';
import Adjust from '../components/Main/Adjust/Adjust';
import Blur from '../components/Main/Blur/Blur';
import Background from '../components/Main/Background/Background';
import Edit from '../components/Main/Edit/Edit';
import {Context} from '../context/Context';
import EditModal from '../components/Main/Edit/EditModal';
import ImageWrapperComponent from '../components/ImageComponent/ImageWrapperComponent';
import BorderModal from '../components/Main/Border/BorderModal';
import BlurModal from '../components/Main/Blur/BlurModal';
import AdjustModal from '../components/Main/Adjust/AdjustModal';
import RatioModal from '../components/Ratio/RatioModal';
import BackgroundModal from '../components/Main/Background/BackgroundModal';

type MainScreenProps = StackScreenProps<RootStackNavigatorParamsList>;

export default function MainScreen({navigation}: MainScreenProps) {
  const {visible} = useContext(Context);

  return (
    <>
      <SafeAreaView className="flex-1 bg-black relative">
        <View className="bg-zinc-900 flex-row justify-between px-4 py-3">
          <View className="flex-row items-center gap-x-1">
            <MaterialIcons
              name="arrow-back-ios"
              size={23}
              color="#ffff"
              onPress={() => navigation.goBack()}
            />
            <Text className="text-lg text-white">Edit</Text>
          </View>

          <TouchableOpacity className="bg-red-600 py-0.5 px-4  rounded-full">
            <Text className="text-lg text-white">Save</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1 flex-col justify-center">
          <ImageWrapperComponent />
        </View>

        {visible?.ratio ? <RatioModal /> : null}
        {visible?.border ? <BorderModal /> : null}
        {visible?.adjust ? <AdjustModal /> : null}
        {visible?.bg ? <BackgroundModal /> : null}
        {visible?.blur ? <BlurModal /> : null}
        {visible?.edit ? <EditModal /> : null}

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Ratio />
            <Crop />
            <Border />
            <Filter />
            <Adjust />
            <Background />
            <Blur />
            <Edit />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
