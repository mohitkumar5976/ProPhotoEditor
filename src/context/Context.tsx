import React, {ReactNode, createContext, useState} from 'react';

import {
  ContextType,
  ImagePropertyState,
  ModalVisibleState,
  RangeState,
  RatioData,
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
  imageFilterColor: '',
  setImageFilterColor: () => {},
  bgColor: '',
  setBgColor: () => {},
  bgImage: '',
  setBgImage: () => {},
  ratio: {},
  setRatio: () => {},
  openModal: () => {},
  closeModal: () => {},
  handleRangeValue: () => {},
};

export const Context = createContext<ContextType>(ContextData);
export default function ContextProvider({children}: {children: ReactNode}) {
  const [selectedImage, setSelectedImage] = useState<string>(
   ""
  );
  const [visible, setVisible] = useState<ModalVisibleState>({});
  const [rangeValue, setRangeValue] = useState<RangeState>({
    blur: 0,
  });
  const [borderColor, setBorderColor] = useState<string>('');
  const [bgColor, setBgColor] = useState<string>('');
  const [bgImage, setBgImage] = useState('');
  const [imageFilterColor, setImageFilterColor] = useState('');
  const [imageProperty, setImageProperty] = useState<ImagePropertyState>({});
  const [scale, setScale] = useState<number>(1);
  const [ratio, setRatio] = useState<RatioData>({});

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
    } else if (value === 'filter') {
      setVisible({
        filter: true,
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
    } else if (value === 'filter') {
      setVisible({
        filter: false,
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
    } else if (value === 'brightness') {
      setRangeValue({
        brightness: e,
      });
    } else if (value === 'Imageblur') {
      setRangeValue({
        imageBlur: e,
      });
    } else if (value === 'saturation') {
      setRangeValue({
        saturation: e,
      });
    }
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
        imageFilterColor,
        setImageFilterColor,
        bgImage,
        setBgImage,
        bgColor,
        setBgColor,
        ratio,
        setRatio,
        rangeValue,
        setRangeValue,
        handleRangeValue,
      }}>
      {children}
    </Context.Provider>
  );
}
