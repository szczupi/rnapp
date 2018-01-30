import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { NavigationActions } from 'react-navigation';
import { CalendarList, Calendar } from 'react-native-calendars';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IHoliday } from '../stateModels/ICalendar';
import IStore from '../stateModels/IStore';
import * as calendarActions from '../actions/calendarActions';
import DateStrip from './DateStrip';

interface Props {
  dates: any;
  selectedDay: IHoliday;
  onDayChange: (day: string) => Dispatch<any>;
  navigation: any;
}

class MyCalendarComponent extends React.Component<Props, any> {

  protected static navigationOptions = {
    tintColor: 'black',
    tabBarIcon:
    (options: { tintColor: string, focused: boolean }) => (
        <Icon
          name={options.focused ? 'ios-calendar' : 'ios-calendar-outline'}
          size = {26}
        />)
  };

    public render() {

      if (this.props.dates.length === 0) {
        return (<View>Loading...</View>);
      }

      const stripProps: any = {...this.props.selectedDay, ...{navigate: this.navigate}};
      return (
        <View style={{flex: 1}}>
          <View style={{flex: 7, marginBottom: 8}}>
            <CalendarList
              current={'2018-01-21'}
              markedDates={this.props.dates}
              onDayPress = {(day: any) => this.props.onDayChange(day) }
              markingType={'period'}
            />
          </View>
          <View style={{flex: 1}}>
            <DateStrip {...stripProps} />
          </View>
        </View>
      );
    }

    private navigate = () => {
      const navigateNotificationScreen = NavigationActions.navigate({
        routeName: 'Powiadomienia',
        params: { date: this.props.selectedDay.date }
      });
      this.props.navigation.dispatch(navigateNotificationScreen);
    };
  }

const mapStateToProps = ({ calendar }: IStore, ownProps: Props): any => {
    const holidayDates: Array<IHoliday> =  calendar.dates;
    const datesArray: Array<Date> = holidayDates.map((holiday: IHoliday) => holiday.date);
    const dates: any = datesArray.reduce((obj: any, item: Date) => {
          obj[item.toISOString().substr(0, 10)] = { selected: true, startingDay: true, color: '#FF4A4A', endingDay: true };
          return obj;
        }, {});

    dates[new Date().toISOString().substr(0, 10)] = { selected: true, startingDay: true, color: '#8ADEF3', endingDay: true };
    return { dates, selectedDay: calendar.selectedDay, navigation: ownProps.navigation };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
      onDayChange: (day: any) => {
        dispatch(calendarActions.changeSelectedDay(new Date(day.timestamp)));
      }
    };
};

const MyCalendar = connect(
  mapStateToProps, mapDispatchToProps
)(MyCalendarComponent);

export default MyCalendar;