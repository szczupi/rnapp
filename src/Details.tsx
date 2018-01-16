import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
//import { NavigationScreenComponent } from 'react-navigation';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class Details extends React.Component<any, any> {

  static styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });

  // static navigationOptions = {
  //   tabBarIcon:(options: { tintColor: string, focused: boolean }) => (
  //       <Icon
  //         name={options.focused ? 'ios-cloud-done': 'ios-cloud-done-outline'}
  //         size = {26}
  //       />)
  // };

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details  Screen</Text>
        </View>
      );
    }
}