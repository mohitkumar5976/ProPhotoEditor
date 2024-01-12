import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackNavigatorParamsList} from '../types/navigationTypes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Border from '../components/Main/Border/Border';
import Crop from '../components/Main/Crop';
import Filter from '../components/Main/Filter/Filter';
import Adjust from '../components/Main/Adjust/Adjust';
import Background from '../components/Main/Background/Background';
import Edit from '../components/Main/Edit/Edit';
import {Context} from '../context/Context';
import EditModal from '../components/Main/Edit/EditModal';
import ImageWrapperComponent from '../components/ImageComponent/ImageWrapperComponent';
import BorderModal from '../components/Main/Border/BorderModal';
import AdjustModal from '../components/Main/Adjust/AdjustModal';
import BackgroundModal from '../components/Main/Background/BackgroundModal';
import FilterModal from '../components/Main/Filter/FilterModal';
import RatioModal from '../components/Main/Ratio/RatioModal';
import Ratio from '../components/Main/Ratio/Ratio';
import RNFS from 'react-native-fs';

type MainScreenProps = StackScreenProps<RootStackNavigatorParamsList>;

export default function MainScreen({navigation}: MainScreenProps) {
  const {visible, selectedImage} = useContext(Context);

  // async function savePhoto(data: string) {
  //   try {
  //     const fileName = 'test1.jpg';

  //     console.log(`${RNFS.PicturesDirectoryPath}/${fileName}`);
  //    await RNFS.moveFile(data, `${RNFS.PicturesDirectoryPath}/${fileName}`).catch((err)=>console.log(err))
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // }

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

          <TouchableOpacity
            className="bg-red-600 py-0.5 px-4  rounded-full"
          >
            <Text className="text-lg text-white">Save</Text>
          </TouchableOpacity>
        </View>
        
        <View className="flex-1 flex-col justify-center relative">
          <ImageWrapperComponent />
        </View>

        {visible?.ratio ? <RatioModal /> : null}
        {visible?.border ? <BorderModal /> : null}
        {visible?.adjust ? <AdjustModal /> : null}
        {visible?.bg ? <BackgroundModal /> : null}
        {visible?.edit ? <EditModal /> : null}
        {visible?.filter ? <FilterModal /> : null}

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Ratio />
            <Crop />
            <Border />
            <Filter />
            <Adjust />
            <Background />
            <Edit />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}
