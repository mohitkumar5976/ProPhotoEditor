import React, { useContext } from 'react';
import TouchableOpacityFC from '../../Reusable/TouchableOpacityFC';
import TextFC from '../../Reusable/TextFC';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconSize } from '../../../utils/Size';
import { Context } from '../../../context/Context';
export default function Background() {
  const {openModal} = useContext(Context);
  return (
    <TouchableOpacityFC handleFun={() => openModal('bg')}>
      <Ionicons name="image-outline" size={IconSize} color="#ffff" />
      <TextFC>Bg</TextFC>
    </TouchableOpacityFC>
  );
}
