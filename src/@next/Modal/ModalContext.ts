import { createContext } from 'react';
import { ComponentWithProviderProps } from '../../types/popupComponent';
import { ModalProps } from './Modal';

export type ShowModalProps = Omit<ModalProps, 'isOpen'>;
export type ModalContextProps = ModalProps &
  ComponentWithProviderProps<ShowModalProps>;

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
