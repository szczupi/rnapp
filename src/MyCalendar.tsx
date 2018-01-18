import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MyCalendar extends React.Component<any, any> {

  protected static navigationOptions = {
    tintColor: 'black',
    tabBarIcon:
    (options: { tintColor: string, focused: boolean }) => (
        <Icon
          name={options.focused ? 'ios-calendar' : 'ios-calendar-outline'}
          size = {26}
        />)
  };

  private static styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });

    public render() {
      return (
        <CalendarList
        markedDates={
          {'2018-01-20': {selected: true, color: 'red'},
           '2018-01-27': {selected: true, color: 'red'},
           '2018-01-04': {selected: true, color: 'red'}
          }}/>
      );
    }
  }