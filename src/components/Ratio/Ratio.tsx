import React, {useContext} from 'react';
import TouchableOpacityFC from '../Reusable/TouchableOpacityFC';
import TextFC from '../Reusable/TextFC';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconSize} from '../../utils/Size';
import {Context} from '../../context/Context';
export default function Ratio() {
  const {openModal} = useContext(Context);
  return (
    <TouchableOpacityFC handleFun={() => openModal('ratio')}>
      <MaterialIcons name="aspect-ratio" size={IconSize} color="#ffff" />
      <TextFC>Ratio</TextFC>
    </TouchableOpacityFC>
  );
}
