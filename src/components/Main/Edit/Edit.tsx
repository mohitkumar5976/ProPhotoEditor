import React, {useContext} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import TouchableOpacityFC from '../../Reusable/TouchableOpacityFC';
import TextFC from '../../Reusable/TextFC';
import {IconSize} from '../../../utils/Size';
import {Context} from '../../../context/Context';

export default function Edit() {
  const {openModal} = useContext(Context);
  return (
    <TouchableOpacityFC handleFun={() => openModal('edit')}>
      <Feather name="edit" size={IconSize} color="#ffff" />
      <TextFC>Edit</TextFC>
    </TouchableOpacityFC>
  );
}
