import React from 'react';
import { View, Image } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm, hexToRGB, mabulColors } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from 'view/components/button/MabulNextButton';
import CommonListItem from 'view/components/adapter/CommonListItem';
import Switch from 'view/components/other/Switch';
import DemandType from 'model/demand/DemandType';

const MabulCommonDateSettingScreen = ({ mabulSettings, process }) => {
  const conceptColor = mabulSettings.color;
  var iconDate = mabulSettings.calendarIcon;
  var iconLocation = mabulSettings.addressIcon;
  var switchView = (
    <Switch
      style={styles.switch}
      switchWidth={50 * em}
      switchHeight={28 * em}
      switchdirection="ltr"
      switchBorderColor="#ffffff"
      switchBackgroundColor="#40CDDE"
      btnBackgroundColor="#FFFFFF"
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Quand ?'} style={styles.title} />
          <CommentText text="Choisis une date si nécessaire" style={styles.comment} />
          <CommonListItem
            icon={iconDate}
            style={styles.listItem}
            title="Date et heure de début"
            subTitle="20 janvier 2021 · 14h00"
            subTitleStyle={styles.listComment}
            titleStyle={styles.listCaption}
          />
          <View style={styles.line} />
          <CommentText style={styles.addDateText} text="+ Date et heure de fin" color={conceptColor} />
          <CommonListItem title="Pas de date" rightView={switchView} />
          <TitleText text={'Lieu'} style={styles.title} />
          <CommentText text="Choisis un adresse si besoin" style={styles.comment} />
          <CommonListItem
            icon={iconLocation}
            style={styles.listItem}
            title="Rue, adresse, ville"
            titleStyle={[styles.listCaption, { fontSize: 16 * em, lineHeight: 18 * em, color: '#6A8596' }]}
          />
          <View style={[styles.line, { marginTop: 13 * em }]} />
          <CommonListItem
            style={styles.listAddLocation}
            titleStyle={[styles.listaddLocationTitle, { color: conceptColor }]}
            title="Utiliser ma position"
          />
        </View>
        <MabulNextButton
          color={hexToRGB(conceptColor, 0.5)}
          style={styles.nextBtn}
          onPress={() => {
            mabulSettings.type === DemandType.GIVE
              ? Actions.mabulCommonShare({ mabulSettings: mabulSettings, process: 97 })
              : mabulSettings.type === DemandType.SELL
              ? Actions.mabulCommonShare({ mabulSettings: mabulSettings, process: 93 })
              : mabulSettings.type === DemandType.ORGANIZE
              ? Actions.mabulOrganizeParticipation({ mabulSettings: mabulSettings, process: 80 })
              : Actions.mabulNeedParticipate({ mabulSettings: mabulSettings, process: 80 });
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10.3%',
  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'left',
    marginTop: 35 * hm,
    lineHeight: 38 * em,
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, height: 16 * em, textAlignVertical: 'center', marginTop: 10 * em },

  iconDate: { width: 19 * em, height: 20 * em, marginRight: 15 * em, marginTop: 9 * em },
  iconLocation: { width: 21 * em, height: 30 * em, marginRight: 15 * em },
  iconAddress: { width: 16 * em, height: 19 * em, marginRight: 10 * em },
  listaddLocationTitle: { fontSize: 14 * em, lineHeight: 16 * em },
  listCaption: { color: '#A0AEB8', fontSize: 12 * em, lineHeight: 14 * em },
  listComment: { fontSize: 16 * em, lineHeight: 18 * em, color: '#1E2D60' },
  listAddLocation: { marginLeft: 37 * em, marginTop: 15 * em },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 36 * em, marginTop: 25 * em },
  addDateText: {
    marginTop: 10 * em,
    textAlign: 'left',
    marginLeft: 36 * em,
  },
  nextBtn: {
    alignSelf: 'flex-end',
    // marginRight: 30 * em,
    marginBottom: 30 * em,
  },
};

export default MabulCommonDateSettingScreen;
