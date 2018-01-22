import { TabNavigator,  NavigationRouteConfigMap } from 'react-navigation';
import MyCalendar from './MyCalendar';
import Notifications from './Notifications';

const routeConfigMap: NavigationRouteConfigMap = {
    ['Calendar'] : {
      screen: MyCalendar
    },
    ['Notifications']: {
      screen: Notifications
    }
};

export default TabNavigator(routeConfigMap);