import React, { useState, useEffect } from 'react';
import { View, BackHandler } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonButton from 'view/components/button/CommonButton';
import FriendParticipatePopupScreen from './popup/FriendParticipatePopupScreen';
import FriendInvitePopupScreen from './popup/FriendInvitePopupScreen';
import OrganizeDemandType from 'model/demand/OrganizeDemandType';
import OrganizeDemand from 'model/demand/OrganizeDemand';
import User from 'model/user/User';
import MabulDetailView from 'view/components/view/MabulDetailView';
import { Actions } from 'react-native-router-flux';
import NeedStatusType from 'model/demand/NeedStatusType';

const organizeData = Object.assign(
  new OrganizeDemand(
    new User('Philippe Durand', require('assets/images/avatars/philippe-durand-116x116.png'), 'anton@gmail.com'),
    'J’organise Atelier',
    'Photographie vintage',
    new Date(),
    require('assets/images/sample_cover_1.png'),
    1,
    OrganizeDemandType.WORKSHOP
  ),
  { status: NeedStatusType.INPROGRESS }
);
const FriendOrganizeScreen = () => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [participatePopupVisible, setParticipatePopupVisible] = useState(false);
  const [data] = useState(organizeData);
  const handleBackButtonClick = () => {
    Actions.main({ tabNav: 'Friends' });
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
  return (
    <View style={styles.container}>
      <MabulDetailView data={data} onBackPress={() => Actions.main({ tabNav: 'Friends', friendNav: 'Liste' })} />
      <View style={styles.btnBox}>
        <CommonButton text={'Participer'} onPress={() => setParticipatePopupVisible(true)} />
      </View>
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
      <FriendParticipatePopupScreen
        visible={participatePopupVisible}
        onPress={() => setParticipatePopupVisible(false)}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  btnBox: {
    paddingLeft: 26 * em,
    paddingRight: 26 * em,
    paddingTop: 15 * hm,
    paddingBottom: 22 * hm,
  },
};

export default FriendOrganizeScreen;
