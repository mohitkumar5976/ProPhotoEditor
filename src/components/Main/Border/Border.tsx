import React, {useContext, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TextFC from '../../Reusable/TextFC';
import {IconSize} from '../../../utils/Size';
import TouchableOpacityFC from '../../Reusable/TouchableOpacityFC';
import {Context} from '../../../context/Context';

export default function Border() {
  const {openModal} = useContext(Context);

  return (
    <TouchableOpacityFC handleFun={() => openModal('border')}>
      <MaterialCommunityIcons
        name="border-all-variant"
        size={IconSize}
        color="#ffff"
      />
      <TextFC>Border</TextFC>
    </TouchableOpacityFC>
  );
}
