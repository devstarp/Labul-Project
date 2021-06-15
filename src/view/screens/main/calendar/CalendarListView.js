import React from 'react';
import { View } from 'react-native';
import { em, HEIGHT } from 'view/common/const';
import { LocaleConfig, CalendarList } from 'react-native-calendars';
import moment from 'moment';
import 'moment/min/locales';

LocaleConfig.locales.fr = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = 'fr';

const CalendarListView = (props) => {
  const [] = React.useState({});
  let markedDate = props.selectedDate.format('YYYY-MM-DD');
  const nextDays = [markedDate];
  let mark = {};

  nextDays.forEach((day) => {
    mark[day] = { selected: true, marked: true, selectedColor: '#40CDDE' };
  });

  return (
    <View style={styles.container}>
      <CalendarList
        current={markedDate}
        scrollEnabled={true}
        showScrollIndicator={true}
        onDayPress={(day) => {
          props.onDayPress(day);
        }}
        markedDates={mark}
        theme={{
          selectedDayTextColor: '#ffffff',
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    width: '100%',
    height: HEIGHT - 230 * em,
    borderBottomStartRadius: 24 * em,
    borderBottomEndRadius: 24 * em,
    paddingBottom: 24 * em,
  },
  titleStyle: { marginLeft: 20 * em, marginTop: 30 * em },
};

export default CalendarListView;
