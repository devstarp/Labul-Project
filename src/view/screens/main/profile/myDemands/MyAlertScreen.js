import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import NeedDemand from 'model/demand/NeedDemand';
import NeedDemandType from 'model/demand/NeedDemandType';
import User from 'model/user/User';
import AvatarWithBadge from 'view/components/view/AvatarWithBadge';
import FriendInvitePopupScreen from 'view/screens/main/friends/popup/FriendInvitePopupScreen';
import { LocationPink, Alert } from 'assets/svg/icons/index.js';
import CommonListItem from 'view/components/adapter/CommonListItem';
import CommonBackButton from 'view/components/button/CommonBackButton';
const needData = new NeedDemand(
  new User('Mathieu Torin', require('assets/images/tab_profile_off.png'), 'anton@gmail.com'),
  'J’ai besoin coup de main bricolage',
  'Récolter des figues',
  new Date(),
  require('assets/images/sample_cover_9.png'),
  3,
  NeedDemandType.REPAIR
);
const MyAlertScreen = () => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [data] = useState(needData);
  const InviteButton = (
    <CommonButton
      textStyle={{ color: '#F9547B' }}
      style={styles.inviteBtn}
      text="Partager"
      onPress={() => setInvitePopupVisible(true)}
    />
  );
  const ModifyButton = (
    <CommonButton
      textStyle={{ color: '#F9547B' }}
      style={styles.quizBtn}
      text="Modifier"
      onPress={() => Actions.editNeed()}
    />
  );
  const AskButton = <CommonButton textStyle={{ color: '#F9547B' }} style={styles.quizBtn} text="Poser une question" />;
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <Alert width={80.59 * em} height={65.25 * em} />
      </View>
      <View style={styles.body}>
        <CommonListItem
          icon={
            <AvatarWithBadge
              avatar={require('assets/images/tab_profile_off.png')}
              badge={require('assets/images/ic_sample_5.png')}
              avatarDiameter={35 * em}
              badgeDiameter={21 * em}
            />
          }
          title={data.user.name}
          titleStyle={{ color: '#1E2D60', marginLeft: 21 * em }}
        />
        <TitleText text={'Alerte Travaux'} style={styles.title} />
        <CommonListItem
          icon={
            <View style={{ marginRight: 10 * em }}>
              <LocationPink width={16 * em} height={19 * em} />
            </View>
          }
          title={'77 Boulevard Amedee Clara \n Le Gosier'}
          titleStyle={{ color: '#6A8596', textAlignVertical: 'top' }}
        />
        {data.status === 'canceled' ? <></> : data.relationship ? AskButton : ModifyButton}
        {data.status !== 'canceled' && InviteButton}
        <View style={{ height: 130 * em }} />
      </View>
      <CommonBackButton dark style={styles.backBtn} />
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backBtn: { position: 'absolute', backgroundColor: '#ffffff', left: 15 * em },
  cover: {
    width: '100%',
    height: 312 * hm,
    backgroundColor: '#FEE0E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    marginTop: -60 * hm,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
    paddingHorizontal: 30 * em,
    paddingTop: 38 * hm,
  },

  title: {
    height: 28 * em,
    lineHeight: 30 * em,
    fontSize: 24 * em,
    textAlign: 'left',
    marginTop: 24 * hm,
    marginBottom: 14 * hm,
    fontWeight: 'bold',
  },
  quizBtn: { marginTop: 25 * hm, backgroundColor: '#FEE0E7' },
  inviteBtn: { marginTop: 15 * hm, backgroundColor: 'transparent', color: '#F9547B' },

};

export default MyAlertScreen;
