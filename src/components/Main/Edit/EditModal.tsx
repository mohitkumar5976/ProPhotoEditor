import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconSize} from '../../../utils/Size';
import {Context} from '../../../context/Context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TextFC from '../../Reusable/TextFC';

export default function EditModal() {
  const {closeModal, setImageProperty, imageProperty, setScale, scale} =
    useContext(Context);

  const handleFull = () => {
    setImageProperty({
      width: false,
    });
  };
  const handleInside = () => {
    setImageProperty({
      width: true,
    });
  };
  const handleMirror = () => {
    if (imageProperty.mirror == true) {
      setImageProperty({
        mirror: false,
      });
    } else {
      setImageProperty({
        mirror: true,
      });
    }
  };
  const handleFlip = () => {
    if (imageProperty.flip == true) {
      setImageProperty({
        flip: false,
      });
    } else {
      setImageProperty({
        flip: true,
      });
    }
  };

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => [setScale(scale - 0.1)];
  return (
    <>
      <View className="w-full bg-zinc-900 py-4 absolute bottom-0 z-10">
        <View className="flex-row justify-between items-center  mb-8 px-5">
          <Text className="text-lg text-white">Edit</Text>
          <FontAwesome6
            name="check"
            size={IconSize}
            color="#ffff"
            onPress={() => closeModal('edit')}
          />
        </View>

        <View className="flex-row justify-around items-start">
          <TouchableOpacity
            className="flex-col items-center w-14 "
            onPress={() => handleInside()}>
            <MaterialIcons name="zoom-in-map" size={IconSize} color="#ffff" />
            <TextFC>Inside</TextFC>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-col items-center w-14"
            onPress={() => handleFull()}>
            <MaterialIcons name="zoom-out-map" size={IconSize} color="#ffff" />
            <TextFC>Full</TextFC>
          </TouchableOpacity>
          <TouchableOpacity className="flex-col items-center w-14">
            <MaterialCommunityIcons
              name="flip-horizontal"
              size={IconSize}
              color="#ffff"
              onPress={handleMirror}
            />
            <TextFC>Mirror</TextFC>
          </TouchableOpacity>
          <TouchableOpacity className="flex-col items-center w-14">
            <MaterialCommunityIcons
              name="flip-vertical"
              size={IconSize}
              color="#ffff"
              onPress={handleFlip}
            />
            <TextFC>Flip</TextFC>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-col items-center w-14"
            onPress={handleZoomIn}>
            <AntDesign name="pluscircleo" size={IconSize} color="#ffff" />
            <TextFC>Zoom+</TextFC>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-col items-center w-14"
            onPress={handleZoomOut}>
            <AntDesign name="minuscircleo" size={IconSize} color="#ffff" />
            <TextFC>Zoom-</TextFC>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
