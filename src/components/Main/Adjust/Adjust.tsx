import React, { useContext } from 'react';
import TouchableOpacityFC from '../../Reusable/TouchableOpacityFC';
import TextFC from '../../Reusable/TextFC';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { IconSize } from '../../../utils/Size';

import { Context } from '../../../context/Context';
export default function Adjust() {
  const {closeModal} = useContext(Context);
  return (
    <TouchableOpacityFC handleFun={() => closeModal({adjust: true})}>
      <Fontisto name="equalizer" size={IconSize} color="#ffff" />
      <TextFC>Adjust</TextFC>
    </TouchableOpacityFC>
  );
}
