import React from 'react';
import TouchableOpacityFC from '../Reusable/TouchableOpacityFC';
import TextFC from '../Reusable/TextFC';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconSize } from '../../utils/Size';

export default function Filter() {
  return (
    <TouchableOpacityFC>
      <Ionicons name="color-filter" size={IconSize} color="#ffff" />
      <TextFC>Filter</TextFC>
    </TouchableOpacityFC>
  );
}
