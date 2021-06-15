import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';
import DemandType from 'model/demand/DemandType';
import SellDemandType from 'model/demand/SellDemandType';
import SmallText from 'view/components/text/SmallText';
import NeedStatusType from 'model/demand/NeedStatusType';
const ProfileCommonNeedCard = (props) => {
  const { data } = props;
  if (data.type === DemandType.SELL) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.container, props.style]}>
          <Image source={data.coverImage} style={styles.cover} />
          <View style={styles.textView}>
            <SmallText text={data.slogan} style={{ marginBottom: 5 * em }} color={'#1E2D60'} />
            <CommentText text={data.comment} style={styles.organName} color={'#1E2D60'} />
            <View style={{ flexDirection: 'row' }}>
              <CommentText text={data.price} style={{ fontFamily: 'Lato-Bold' }} color={'#1E2D60'} />
              <CommentText
                text={data.discountPrice}
                style={{ marginLeft: 10 * em, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}
                color={'#A0AEB8'}
              />
            </View>
            {data.discountInfo && (
              <SmallText text={data.discountInfo} style={{ marginTop: 15 * em }} color={'#A0AEB8'} />
            )}
            {data.subType === SellDemandType.EVENT && (
              <SmallText text={'06 Fév · 14H00'} style={{ marginTop: 15 * em }} color={'#A0AEB8'} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <Image source={data.coverImage} style={styles.cover} />
        <View style={styles.textView}>
          <SmallText text={'06 Fév · 14H00'} style={styles.date} color="#6A8596" />
          <SmallText text={data.organName} style={styles.title} color={'#1E2D60'} />
          <CommentText text={data.title} style={styles.organName} color={'#1E2D60'} />
          <StatusView text={data.status} style={styles.status} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = {
  container: { flexDirection: 'row' },
  cover: { width: 95 * em, height: 141 * em, borderRadius: 18 * em },
  textView: { marginLeft: 15 * em, paddingTop: 15 * em, alignItems: 'flex-start', width: 205 * em },
  date: { lineHeight: 14 * em },
  title: { lineHeight: 16 * em, marginTop: 10 * em, marginBottom: 5 * em, textAlign: 'left' },
  organName: { lineHeight: 21 * em, textAlign: 'left', fontFamily: 'Lato-Black', marginBottom: 15 * em },
  status: { marginTop: 15 * em },
  statusView: { borderRadius: 15 * em, paddingVertical: 4 * em, paddingHorizontal: 8 * em },
};
const statusStyle = [
  { id: NeedStatusType.INPROGRESS, title: 'En cours', color: '#40CDDE', backgroundColor: '#D9F6F9' },
  { id: NeedStatusType.CANCELED, title: 'Annulée', color: '#6A8596', backgroundColor: '#F0F5F7' },
  { id: NeedStatusType.WAITING, title: 'En attente', color: '#FEBD71', backgroundColor: '#FFF2E2' },
  { id: NeedStatusType.PARTICPATED, title: 'Je participe', color: '#1BD39A', backgroundColor: '#D1F6EB' },
  { id: NeedStatusType.REFUSED, title: 'Réfusé', color: '#F9547B', backgroundColor: '#FEDDE4' },
];
export default ProfileCommonNeedCard;
const StatusView = (props) => {
  const status = statusStyle.find((element) => element.id === props.text);
  return (
    <View   style={[styles.statusView, { backgroundColor: status.backgroundColor }]}>
    <SmallText

      text={status.title}
      color={status.color}
    /></View>
  );
};
