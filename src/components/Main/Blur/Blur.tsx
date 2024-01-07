import React, { useContext } from 'react';
import TouchableOpacityFC from '../../Reusable/TouchableOpacityFC';
import TextFC from '../../Reusable/TextFC';
import Entypo from 'react-native-vector-icons/Entypo';
import { IconSize } from '../../../utils/Size';
import { Context } from '../../../context/Context';

export default function Blur() {
  const {openModal} = useContext(Context);
  return (
    <TouchableOpacityFC handleFun={() => openModal("blur")}>
      <Entypo name="drop" size={IconSize} color="#ffff" />
      <TextFC>Blur</TextFC>
    </TouchableOpacityFC>
  );
}
