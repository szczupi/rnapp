import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { NavigationScreenComponent } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Notifications extends React.Component<any, any> {

  protected static navigationOptions = {
    tabBarIcon: (options: { tintColor: string, focused: boolean }) => (
        <Icon
          name={options.focused ? 'ios-notifications' : 'ios-notifications-outline'}
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notifications  Screen</Text>
        </View>
      );
    }
  }