import React, {useContext} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Context} from '../../../context/Context';
import TouchableOpacityFC from '../../Reusable/TouchableOpacityFC';
import TextFC from '../../Reusable/TextFC';
import {IconSize} from '../../../utils/Size';

export default function Ratio() {
  const {openModal} = useContext(Context);
  return (
    <>
      <TouchableOpacityFC handleFun={() => openModal('ratio')}>
        <MaterialIcons name="aspect-ratio" size={IconSize} color="#ffff" />
        <TextFC>Ratio</TextFC>
      </TouchableOpacityFC>
    </>
  );
}
