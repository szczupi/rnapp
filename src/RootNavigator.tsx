import Home from './Home';
import { DrawerNavigator, DrawerNavigatorConfig, NavigationRouteConfigMap, NavigationRouteConfig, DrawerItems, NavigationActions } from 'react-navigation';
import Details from './Details';
import { ScrollView, StyleSheet, View, Text, Button } from 'react-native';
import React from 'react';

// const tabNavigatorScreenOptions: NavigationTabScreenOptions = {
//   title: 'title',
//   tabBarVisible: true,
//   tabBarIcon: <View />,
//   tabBarLabel: 'label',
// };

// const tabNavigatorConfig: TabNavigatorConfig = {
//   tabBarPosition: 'bottom',
//   animationEnabled: true,
//   tabBarOptions: {
//     showIcon: true,
//     showLabel: false,
//     activeTintColor: 'red',
//     activeBackgroundColor: 'red',
//     pressColor: 'red'
//   }
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class DrawerContent extends React.Component<any> {

  public render() {
    return(
      <View style={{elevation: 10}}>
        <View style={{height: 200, backgroundColor: '#6ABFA0'}}>
          <View style={{marginTop: 50, alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: '#fff'}}>
              Daily Attendance
            </Text>
            <Text style={{fontSize: 50, color: '#fff'}}>
              Sections
            </Text>
          </View>
        </View>
        <View>
              <Button onPress={this.navigateToScreen('Home')} title='press' />
            </View>
          </View>
    );
  }

  private navigateToScreen = (route: any) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.navigate(route);
  }

}

const drawerNavigatorConfig: DrawerNavigatorConfig = {
  contentComponent: (props) => <DrawerContent {...props} />,
};

const routeConfigMap: NavigationRouteConfigMap = {
    ['Home'] : {
      screen: Home
    },
    ['Details']: {
      screen: Details
    }
};

const RootNavigator = DrawerNavigator(routeConfigMap, drawerNavigatorConfig);

export default RootNavigator;