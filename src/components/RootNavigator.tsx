import { TabNavigator,  NavigationRouteConfigMap } from 'react-navigation';
import MyCalendar from './MyCalendar';
import Notifications from './Notifications';

const routeConfigMap: NavigationRouteConfigMap = {
    ['Kalendarz'] : {
      screen: MyCalendar
    },
    ['Powiadomienia']: {
      screen: Notifications
    }
};

export default TabNavigator(routeConfigMap);