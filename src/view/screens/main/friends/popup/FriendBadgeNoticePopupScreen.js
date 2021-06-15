import React from 'react';
import { View, StatusBar } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';
import Modal from 'react-native-modal';
import CommonBackButton from 'view/components/button/CommonBackButton';
import CommonTextInput from 'view/components/textInput/CommonTextInput';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import PopupBackgroundView from '../../../../components/view/PopupBackgroundView';

const FriendBadgeNoticePopupScreen = (props) => {
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <PopupBackgroundView />
      <View style={styles.body}>
        <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
        <CommonBackButton
          dark
          onPress={() => {
            props.onPress();
            Actions.friendGiveBadge();
          }}
          style={{
            marginLeft: -15 * em,
            shadowColor: '#B3C6CF33',
            shadowOffset: {
              width: 0,
              height: 20 * em,
            },
            shadowOpacity: 1,
            shadowRadius: 40 * em,
            elevation: 2,
          }}
        />
        <View style={styles.iconView}>
          <View style={styles.circleContainer}>{props.selected[0].icon}</View>
          <View style={[styles.circleContainer, { marginTop: -18 * em }]}>{props.selected[1].icon}</View>
          <View style={styles.circleContainer}>{props.selected[2].icon}</View>
        </View>
        <TitleText text="Super !" style={styles.title} />
        <CommonText text="Tu veux laisser un commentaire ?" color="#1E2D60" style={styles.comment} />
        <CommonTextInput text={'Écris ici'} isPasswordInput={false} style={styles.input} />
      </View>
      <CommonButton
        style={styles.btn}
        textStyle={{ color: '#40CDDE' }}
        text="Continuer sans commentaire"
        onPress={() => {
          props.onPress();
          Actions.myDemandsHome({ tabNav: 'participations' });
        }}
      />
    </Modal>
  );
};
const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: 20.5 * em,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: { paddingHorizontal: 30 * em, paddingTop: 15 * em, width: '100%' },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 66 * em,
    height: 67 * em,
    borderRadius: 40.5 * em,
    shadowColor: '#A7A7A733',
    shadowOffset: {
      width: 0,
      height: 8 * hm,
    },
    shadowOpacity: 1,
    shadowRadius: 20 * em,
    elevation: 1,
  },

  btn: { backgroundColor: '#ffffff', borderWidth: 1 * em, borderColor: '#40CDDE', marginBottom: 31 * em },
  iconView: {
    paddingHorizontal: 43 * em,
    marginTop: 47 * em,
    marginBottom: 35 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: { height: 52 * em },
  title: { marginBottom: 10 * em, alignSelf: 'center' },
  comment: { marginBottom: 16 * em, alignSelf: 'center' },
  listItem: { marginBottom: 35 * em },
};
export default FriendBadgeNoticePopupScreen;
