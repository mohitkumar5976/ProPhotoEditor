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
  const [selectedImage, setSelectedImage] = useState<string>(
    'data:image/jpeg;base64,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',
  );
  const [visible, setVisible] = useState<ModalVisibleState>({});
  const [rangeValue, setRangeValue] = useState<RangeState>({
    blur: 5,
    brightness:-0.9,
    contrast:-0.9,
    saturation:-0.9
  });
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
    } else if (value === 'adjust') {
      setVisible({
        adjust: true,
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
    } else if (value === 'adjust') {
      setVisible({
        adjust: false,
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
    }else if (value === 'brightness') {
      setRangeValue({
        brightness: e,
      });
    }else if (value === 'Imageblur') {
      setRangeValue({
        imageBlur: e,
      });
    }else if (value === 'saturation') {
      setRangeValue({
        saturation: e,
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
