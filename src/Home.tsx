import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
//import { NavigationScreenComponent } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends React.Component<any, any> {

  static styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });

  // static navigationOptions = {
  //   tintColor: 'black',
  //   tabBarIcon:(options: { tintColor: string, focused: boolean }) => (
  //       <Icon
  //         name={options.focused ? 'ios-basket': 'ios-basket-outline'}
  //         size = {26}
  //       />)
  // };

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
      onPress={() => this.props.navigation.navigate('Details')}
      title="Go to details"
    />
        </View>
      );
    }
}