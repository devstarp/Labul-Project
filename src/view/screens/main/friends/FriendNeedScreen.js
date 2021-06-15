import React, { useState, useEffect } from 'react';
import { View, BackHandler } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import NeedDemand from 'model/demand/NeedDemand';
import NeedDemandType from 'model/demand/NeedDemandType';
import User from 'model/user/User';
import MabulDetailView from 'view/components/view/MabulDetailView';
import { Send, Option } from 'assets/svg/icons';
import FriendCancelParticipatePopupScreen from './popup/FriendCancelParticipatePopupScreen';
import NeedStatusType from 'model/demand/NeedStatusType';
import FriendBadgeNoticePopupScreen from './popup/FriendBadgeNoticePopupScreen';
import { feedbackIcons } from 'view/common/icons';
const needData = Object.assign(
  new NeedDemand(
    new User('Amandine Bernard', require('assets/images/sample_user_1.png'), 'anton@gmail.com'),
    'J’ai besoin coup de main bricolage',
    'Réparer une chaise',
    new Date(),
    require('assets/images/sample_cover_2.png'),
    3,
    NeedDemandType.REPAIR
  ),
  { status: null, relationship: 'Mon ami/ ma familie' }
);
const FriendNeedScreen = (props) => {
  const [cancelParticipatePopupVisible, setcancelParticipatePopupVisible] = useState(false);
  const [badgeNoticeVisible, setBadgeNoticeVisible] = useState(false);

  const [data] = useState(props.detail ? props.detail : needData);
  const [status, setStatus] = useState(props.status || data.status);
  const RequestButton = (
    <CommonButton text={'Participer'} style={styles.partBtn} onPress={() => setStatus(NeedStatusType.WAITING)} />
  );
  const ParticipationButton = (
    <CommonButton
      onRightPress={() => setcancelParticipatePopupVisible(true)}
      leftIcon={<View />}
      rightIcon={Option({ width: 4 * em, height: 18 * em })}
      iconStyle={{ marginRight: 20 * em }}
      text={'Je participe'}
      textStyle={{ color: '#1BD39A' }}
      style={[styles.partBtn, { backgroundColor: '#D0F5EA', justifyContent: 'space-between' }]}
    />
  );
  const OpinionButton = (
    <CommonButton style={styles.partBtn} text="Donner mon avis" onPress={() => setBadgeNoticeVisible(true)} />
  );
  const WaitingButton = (
    <CommonButton
      onPress={() => {}}
      rightIcon={Option({ width: 4 * em, height: 18 * em })}
      // iconStyle={{ marginLeft: 36 * em }}
      text={'Demande de participation envoyée'}
      textStyle={{ color: '#22D39A', fontFamily: 'Lato-Regular' }}
      style={styles.waitingButton}
    />
  );
  const handleBackButtonClick = () => {
    console.log('preesed');
    Actions.main({ tabNav: 'Friends' });
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
  var mainButton;
  switch (status) {
    case NeedStatusType.INPROGRESS:
      mainButton = ParticipationButton;
      break;
    case NeedStatusType.CANCELED:
      mainButton = OpinionButton;
      break;
    case NeedStatusType.WAITING:
      mainButton = WaitingButton;
      break;
    default:
      mainButton = RequestButton;
      break;
  }
  // console.log(data.relationship);
  return (
    <View style={styles.container}>
      <MabulDetailView data={Object.assign(data, { status: status, relationship: needData.relationship })} />
      <View style={styles.btnBox}>{mainButton}</View>
      <FriendCancelParticipatePopupScreen
        visible={cancelParticipatePopupVisible}
        onPress={() => setcancelParticipatePopupVisible(false)}
        onStatus={(v) => setStatus(v)}
      />
      <FriendBadgeNoticePopupScreen
        visible={badgeNoticeVisible}
        selected={[feedbackIcons[0], feedbackIcons[1], feedbackIcons[2]]}
        onPress={() => setBadgeNoticeVisible(false)}
      />
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: 'transparent' },
  btnBox: {
    // paddingLeft: 26 * em,
    // paddingRight: 26 * em,
    paddingTop: 15 * hm,
    paddingBottom: 22 * hm,
    backgroundColor: '#ffffff',
  },
  partBtn: { width: 315 * em, alignSelf: 'center' },
  waitingButton: {
    alignSelf: 'center',
    backgroundColor: '#F0F5F7',
    width: 323 * em,
    justifyContent: 'space-between',
    paddingRight: 20 * em,
    paddingLeft: 25 * em,
  },
};

export default FriendNeedScreen;
