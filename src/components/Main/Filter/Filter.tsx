import React, { useContext } from 'react';
import TouchableOpacityFC from '../../Reusable/TouchableOpacityFC';
import TextFC from '../../Reusable/TextFC';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconSize } from '../../../utils/Size';
import { Context } from '../../../context/Context';

export default function Filter() {
  const {openModal} = useContext(Context);
  return (
    <TouchableOpacityFC handleFun={() => openModal('filter')}>
      <Ionicons name="color-filter" size={IconSize} color="#ffff" />
      <TextFC>Filter</TextFC>
    </TouchableOpacityFC>
  );
}
