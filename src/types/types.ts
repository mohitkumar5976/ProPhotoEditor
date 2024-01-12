export type ModalVisibleState = {
  ratio?: boolean;
  border?: boolean;
  crop?: boolean;
  adjust?: boolean;
  bg?: boolean;
  edit?: boolean;
  blur?: boolean;
  filter?: boolean;
};

export type RangeState = {
  border?: number;
  blur?: number;
  brightness?: number;
  imageBlur?: number;
  saturation?: number;
};

export type ImagePropertyState = {
  toggle?: boolean;
  width?: boolean;
  mirror?: boolean;
  flip?: boolean;
};

export type RatioData = {
  width?: string;
  height?: string;
};

export type ContextType = {
  selectedImage: string;
  setSelectedImage: (s: string) => void;
  imageProperty: ImagePropertyState;
  setImageProperty: (imageProperty: ImagePropertyState) => void;
  visible: ModalVisibleState;
  setVisible: (visible: ModalVisibleState) => void;
  borderColor: string;
  setBorderColor: (borderColor: string) => void;
  rangeValue: RangeState;
  setRangeValue: (rangeValue: RangeState) => void;
  scale: number;
  setScale: (scale: number) => void;
  bgColor: string;
  setBgColor: (bgColor: string) => void;
  imageFilterColor: string;
  setImageFilterColor: (filter: string) => void;
  bgImage: string;
  setBgImage: (bgImage: string) => void;
  ratio: RatioData;
  setRatio: (ratio:RatioData) => void;

  openModal: (value: string) => void;
  closeModal: (value: string) => void;
  handleRangeValue: (value: string, e: any) => void;
};
