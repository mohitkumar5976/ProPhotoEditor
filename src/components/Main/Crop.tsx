import React from 'react';
import TouchableOpacityFC from '../Reusable/TouchableOpacityFC';
import TextFC from '../Reusable/TextFC';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { IconSize } from '../../utils/Size';

export default function Crop() {
  return (
    <TouchableOpacityFC>
      <FontAwesome6 name="crop" size={IconSize} color="#ffff" />
      <TextFC>Crop</TextFC>
    </TouchableOpacityFC>
  );
}
