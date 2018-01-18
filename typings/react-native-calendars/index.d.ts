declare module 'react-native-calendars' {
  import * as React from 'react';
  import {
    Animated,
    TextStyle,
    ViewStyle,
    StyleProp,
  } from 'react-native';

// @todo when we split types into common, native and web,
// we can properly change Animated.Value to its real value
export const Calendar: React.ComponentClass<any>;

export const CalendarList: React.ComponentClass<any>;

export const Agenda: React.ComponentClass<any>;
}