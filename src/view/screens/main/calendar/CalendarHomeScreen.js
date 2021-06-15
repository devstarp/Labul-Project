import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, WIDTH } from 'view/common/const';
import CalendarStrip from 'view/components/calendar/CalendarStrip';
import { NextIcon, PrevIcon } from 'assets/svg/icons';
import NeedDemand from 'model/demand/NeedDemand';
import NeedDemandType from 'model/demand/NeedDemandType';
import User from 'model/user/User';
import ScheduleCard from './ScheduleCard';
import CalendarListView from './CalendarListView';
import moment from 'moment';
import 'moment/min/locales';
import { Actions } from 'react-native-router-flux';

const locale = {
  name: 'fr',
  config: {
    months: 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_'),
    monthsShort: 'Janv_Févr_Mars_Avr_Mai_Juin_Juil_Août_Sept_Oct_Nov_Déc'.split('_'),
    weekdays: 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_'),
    weekdaysShort: 'Dim_Lun_Mar_Mer_Jeu_Ven_Sam'.split('_'),
    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY LT',
      LLLL: 'dddd D MMMM YYYY LT',
    },
    calendar: {
      sameDay: "[Aujourd'hui à] LT",
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L',
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'une année',
      yy: '%d années',
    },
    ordinalParse: /\d{1,2}(er|ème)/,
    ordinal: function (number) {
      return number + (number === 1 ? 'er' : 'ème');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
      return input.charAt(0) === 'M';
    },
    meridiem: function (hours, minutes, isLower) {
      return hours < 12 ? 'PD' : 'MD';
    },
    week: {
      dow: 1,
      doy: 4,
    },
  },
};

const blankSchedules = [
  { id: '1', time: 8 },
  { id: '2', time: 9 },
  { id: '3', time: 10 },
  { id: '4', time: 11 },
  { id: '5', time: 12 },
  { id: '6', time: 13 },
  { id: '7', time: 14 },
  { id: '8', time: 15 },
  { id: '9', time: 16 },
  { id: '10', time: 17 },
  { id: '11', time: 18 },
];

const schedules = [
  { id: '1', time: 8 },
  {
    id: '2',
    time: 9,
    demand: new NeedDemand(
      new User('Amandine Bernard', require('assets/images/sample_user_1.png'), 'anton@gmail.com'),
      'J’ai besoin Service Bricolage',
      'Réparer une chaise',
      '04 Fév · 09h00',
      require('assets/images/sample_cover_2.png'),
      3,
      NeedDemandType.REPAIR
    ),
  },
  { id: '3', time: 10 },
  { id: '4', time: 11 },
  {
    id: '5',
    time: 12,
    demand: new NeedDemand(
      new User('Amandine Bernard', require('assets/images/sample_user_1.png'), 'anton@gmail.com'),
      'J’ai besoin Service Bricolage',
      'Réparer une chaise',
      '06 Fév · 14h00',
      require('assets/images/sample_cover_2.png'),
      3,
      NeedDemandType.REPAIR
    ),
  },
  { id: '6', time: 13 },
  { id: '7', time: 14 },
  { id: '8', time: 15 },
  { id: '9', time: 16 },
  { id: '10', time: 17 },
  { id: '11', time: 18 },
];

const CalendarHomeScreen = () => {
  const [selectedSchedules, setSelectedSchedules] = React.useState(blankSchedules);
  const [showCalendarStrip, setShowCalendarStrip] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(moment());
  const renderFlatList = ({ item }) => (
    <ScheduleCard
      data={item}
      onPressSee={() => {
        Actions.friendNeed();
      }}
    />
  );
  React.useEffect(() => {
    setSelectedSchedules(schedules);
  }, []);

  console.log("Selected Date from Calendar List", selectedDate);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TitleText text="Mon calendrier" textAlign="left" style={styles.titleText} />
      </View>
      <View style={styles.calendarContainer}>
        {showCalendarStrip && (
          <CalendarStrip
            style={styles.calendarStripStyle}
            locale={locale}
            calendarHeaderStyle={styles.calendarHeaderStyle}
            calendarHeaderContainerStyle={styles.calendarHeaderContainerStyle}
            dayContainerStyle={styles.dayContainerStyle}
            highlightDateNumberContainerStyle={styles.highlightDateNumberContainerStyle}
            dateNumberStyle={styles.dateNumberStyle}
            dateNameStyle={styles.dateNameStyle}
            selectedDate={selectedDate}
            onDateSelected={(date) => {
              if (moment().isSame(date, 'day')) {
                setSelectedSchedules(schedules);
                return;
              }
              setSelectedSchedules(blankSchedules);
            }}
            leftSelector={
              <View style={styles.calendarIconStyle}>
                <PrevIcon width={10 * em} height={10 * em} />
              </View>
            }
            rightSelector={
              <View style={styles.calendarIconStyle}>
                <NextIcon width={10 * em} height={10 * em} />
              </View>
            }
            upperCaseDays={false}
            highlightDateNumberStyle={styles.highlightDateNumberStyle}
            highlightDateNameStyle={styles.highlightDateNameStyle}
          />
        )}
        {showCalendarStrip && (
          <TouchableOpacity
            onPress={() => {
              setShowCalendarStrip(false);
            }}>
            <View>
              <View style={styles.knob} />
            </View>
          </TouchableOpacity>
        )}
        {!showCalendarStrip && (
          <CalendarListView
            selectedDate={selectedDate}
            onDayPress={(day) => {
              let stripeDate = moment(day.dateString);
              console.log("stripeDate", stripeDate);
              setSelectedDate(stripeDate);
              setShowCalendarStrip(true);
            }}
          />
        )}
      </View>
      {showCalendarStrip && (
        <FlatList
          data={selectedSchedules}
          renderItem={renderFlatList}
          keyExtractor={(i) => i.id}
          style={styles.container}
        />
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  titleContainer: { paddingLeft: 30 * em, paddingTop: 30 * em, paddingBottom: 36 * em, backgroundColor: '#fff' },
  titleText: { marginTop: 16 * em },
  calendarContainer: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomStartRadius: 24 * em,
    borderBottomEndRadius: 24 * em,
    elevation: 4,
    shadowColor: '#84848442',
    shadowOffset: {
      width: 0,
      height: 12 * em,
    },
    shadowRadius: 25 * em,
  },
  calendarStripStyle: { width: WIDTH - 32 * em, height: 140 * em },
  calendarHeaderStyle: { color: '#1E2D60', fontSize: 20 * em, fontFamily: 'Lato-Regular' },
  calendarIconStyle: {
    width: 20 * em,
    height: 20 * em,
    backgroundColor: '#A0AEB8',
    borderRadius: 10 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarHeaderContainerStyle: { marginBottom: 8 * em },
  dayContainerStyle: {
    width: 40 * em,
    height: 74 * em,
    backgroundColor: '#40CDDE',
    elevation: 3,
    shadowColor: '#84848442',
    shadowOffset: {
      width: 0,
      height: 9 * em,
    },
    shadowOpacity: 1,
    shadowRadius: 16 * em,
  },
  highlightDateNumberContainerStyle: {
    backgroundColor: '#fff',
    width: 30 * em,
    height: 30 * em,
    borderRadius: 15 * em,
    paddingTop: 2 * em,
    marginTop: -2 * em,
  },
  dateNumberStyle: { color: '#1E2D60', fontSize: 18 * em, fontFamily: 'Lato-Regular' },
  dateNameStyle: {
    color: '#BFCDDB',
    marginBottom: 16 * em,
    fontSize: 14 * em,
    fontFamily: 'Lato-Bold',
  },
  highlightDateNumberStyle: {
    color: '#1E2D60',
    width: 30 * em,
    fontSize: 18 * em,
    fontFamily: 'Lato-Bold',
  },
  highlightDateNameStyle: {
    color: '#fff',
    width: 30 * em,
    fontSize: 14 * em,
    fontFamily: 'Lato-Bold',
    marginBottom: 16 * em,
    paddingTop: 6 * em,
  },
  knob: {
    marginBottom: 20 * em,
    width: 55 * em,
    height: 5 * em,
    borderRadius: 2.5 * em,
    backgroundColor: '#BFCDDB24',
    alignSelf: 'center',
  },
};

export default CalendarHomeScreen;
