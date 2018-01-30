import { TabNavigator,  NavigationRouteConfigMap } from 'react-navigation';
import MyCalendar from '../components/MyCalendar';
import Notifications from '../components/Notifications';

const routeConfigMap: NavigationRouteConfigMap = {
    ['Kalendarz'] : {
      screen: MyCalendar
    },
    ['Powiadomienia']: {
      screen: Notifications
    }
};

export default TabNavigator(routeConfigMap);