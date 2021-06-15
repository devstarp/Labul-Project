import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { em, hm } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';
import SmallText from 'view/components/text/SmallText';
import TinyText from 'view/components/text/TinyText';

const renderDemand = (data, onPressSee) => {
  if (data.demand == null) {
    return <View style={styles.separator} />;
  }
  return (
    <View style={styles.demandContainer}>
      <Image source={data.demand.user.photo} style={{ width: 32 * em, height: 32 * em, alignSelf: 'center' }} />
      <View style={styles.demandSubContainer}>
        <TinyText text={data.demand.date} style={styles.largeTopPadding} />
        <SmallText text={data.demand.user.name} style={{ fontFamily: 'Lato-Bold', marginTop: 17 * hm }} />
        <TinyText text={data.demand.organName} style={styles.smallTopPadding} />
        <View style={styles.demandInfoContainer}>
          <SmallText text={data.demand.title} style={styles.smallTopPadding} />
          <TouchableOpacity onPress={onPressSee} style={styles.colReverse}>
            <TinyText text="Voir>" color="#40CDDE" style={{ fontFamily: 'Lato-Bold' }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ScheduleCard = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <CommentText text={data.time < 10 ? '0' + data.time + 'h' : data.time + 'h'} />
      {renderDemand(data, props.onPressSee)}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20 * hm,
    paddingHorizontal: 20 * em,
  },
  demandContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 12 * em,
    borderRadius: 16 * em,
    marginLeft: 10 * em,
    elevation: 3,
    shadowColor: '#254D5612',
    shadowOffset: {
      width: 0,
      height: 12 * em,
    },
    shadowOpacity: 1,
    shadowRadius: 25 * em,
  },
  demandInfoContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 13 * hm },
  colReverse: { flexDirection: 'column-reverse', marginRight: 9 * em },
  smallTopPadding: { marginTop: 4 * hm, fontFamily: 'Lato-Bold' },
  largeTopPadding: { marginTop: 11 * hm },
  demandSubContainer: { flex: 1, paddingLeft: 10 * em },
  itemMargin: { marginLeft: 10 * em },
  separator: { flex: 1, height: em, backgroundColor: '#A0A4B7', alignSelf: 'center', marginLeft: 10 * em },
};

export default ScheduleCard;
