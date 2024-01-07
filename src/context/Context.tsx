import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {ReactNode, createContext, useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {RootStackNavigatorParamsList} from '../types/navigationTypes';
import {
  ContextType,
  ImagePropertyState,
  ModalVisibleState,
  RangeState,
} from '../types/types';
import {createIconSetFromFontello} from 'react-native-vector-icons';

const ContextData: ContextType = {
  selectedImage: '',
  setSelectedImage: () => {},
  visible: {},
  imageProperty: {},
  setImageProperty: () => {},
  setVisible: () => {},
  borderColor: '',
  setBorderColor: () => {},
  rangeValue: {},
  setRangeValue: () => {},
  scale: 1,
  setScale: () => {},
  bgColor: '',
  setBgColor: () => {},
  bgImage: '',
  setBgImage: () => {},
  ratio: 1,
  setRatio: () => {},

  openModal: () => {},
  closeModal: () => {},
  handleRangeValue: () => {},
  handleCameraLaunch: () => {},
  openImagePicker: () => {},
};

export const Context = createContext<ContextType>(ContextData);
export default function ContextProvider({children}: {children: ReactNode}) {
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [visible, setVisible] = useState<ModalVisibleState>({});
  const [rangeValue, setRangeValue] = useState<RangeState>({});
  const [borderColor, setBorderColor] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('');
  const [bgImage, setBgImage] = useState('');
  const [imageProperty, setImageProperty] = useState<ImagePropertyState>({});
  const [scale, setScale] = useState<number>(1);
  const [ratio, setRatio] = useState<number>(1);

  const openModal = (value: string) => {
    if (value === 'border') {
      setVisible({
        border: true,
      });
    } else if (value === 'edit') {
      setVisible({
        edit: true,
      });
    } else if (value === 'ratio') {
      setVisible({
        ratio: true,
      });
    } else if (value === 'blur') {
      setVisible({
        blur: true,
      });
    } else if (value === 'bg') {
      setVisible({
        bg: true,
      });
    }
  };
  const closeModal = (value: string) => {
    if (value === 'border') {
      setVisible({
        border: false,
      });
    } else if (value === 'edit') {
      setVisible({
        border: false,
      });
    } else if (value === 'ratio') {
      setVisible({
        ratio: false,
      });
    } else if (value === 'blur') {
      setVisible({
        blur: false,
      });
    } else if (value === 'bg') {
      setVisible({
        bg: false,
      });
    }
  };

  const handleRangeValue = (value: string, e: number) => {
    if (value === 'border') {
      setRangeValue({
        border: e,
      });
    } else if (value === 'blur') {
      setRangeValue({
        blur: e,
      });
    }
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        navigation.navigate('Main');
      }
    });
  };

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        navigation.navigate('Main');
      }
    });
  };
  return (
    <Context.Provider
      value={{
        selectedImage,
        setSelectedImage,
        openModal,
        closeModal,
        borderColor,
        setBorderColor,
        imageProperty,
        setImageProperty,
        visible,
        setVisible,
        scale,
        setScale,
        bgImage,
        setBgImage,
        bgColor,
        setBgColor,
        ratio,
        setRatio,
        rangeValue,
        setRangeValue,
        handleRangeValue,
        openImagePicker,
        handleCameraLaunch,
      }}>
      {children}
    </Context.Provider>
  );
}
