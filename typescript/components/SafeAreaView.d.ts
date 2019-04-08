import * as React from 'react';
import { ViewProps } from 'react-native';
import { SafeAreaViewForceInsetValue } from '../types';

export interface SafeAreaViewProps extends ViewProps {
  forceInset?: {
    top?: SafeAreaViewForceInsetValue;
    bottom?: SafeAreaViewForceInsetValue;
    left?: SafeAreaViewForceInsetValue;
    right?: SafeAreaViewForceInsetValue;
    horizontal?: SafeAreaViewForceInsetValue;
    vertical?: SafeAreaViewForceInsetValue;
  };
  children?: React.ReactNode;
}

export const SafeAreaView: React.ComponentClass<SafeAreaViewProps>;
