import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import Modal from 'react-native-modal';
import CommonListItem from 'view/components/adapter/CommonListItem';
import CommonButton from 'view/components/button/CommonButton';
import { Delete, ReportProblem, Block } from 'assets/svg/icons';
import { Actions } from 'react-native-router-flux';
const MessageProfilePopupScreen = (props) => {
  return (
    <Modal
      isVisible={props.user ? true : false}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
      <View style={styles.body}>
        <Image source={props.user && props.user.photo} style={styles.avatar} />
        <CommonText text={props.user && props.user.name} style={styles.userName} />
        <CommonListItem
          style={styles.listItem}
          title="Supprimer conversation"
          titleStyle={{ color: '#6A8596' }}
          rightView={Delete({ width: 18 * em, height: 20 * em })}
        />
        <CommonListItem
          style={styles.listItem}
          title="Signaler profil"
          titleStyle={{ color: '#F9547B' }}
          rightView={ReportProblem({ width: 20 * em, height: 20 * em })}
        />
        <CommonListItem
          style={styles.listItem}
          title="Bloquer"
          titleStyle={{ color: '#F9547B' }}
          rightView={Block({ width: 20 * em, height: 20 * em })}
        />
      </View>
      <CommonButton
        text="Annuler"
        style={styles.cancelBtn}
        textStyle={{ color: '#1E2D60' }}
        onPress={() => {
          Actions.main();
          props.onPress();
        }}
      />
    </Modal>
  );
};
const styles = {
  container: { margin: 0, flex: 1, justifyContent: 'flex-end' },
  avatar: { width: 54 * em, height: 54 * em, marginTop: 29 * em, borderRadius: 27 * em },
  userName: { fontFamily: 'Lato-Bold', color: '#1E2D60', marginBottom: 23 * em, marginTop: 10 * em },

  body: {
    paddingHorizontal: 25 * em,
    alignItems: 'center',
    marginRight: 30 * em,
    marginLeft: 30 * em,
    marginBottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
  },
  listItem: {
    height: 70 * em,
    justifyContent: 'center',
    borderTopWidth: 1 * em,
    borderColor: '#B3C6CF33',
    width: '100%',
  },
  cancelBtn: { marginTop: 35 * em, backgroundColor: '#ffffff', alignSelf: 'center', marginBottom: 23 * em },
};
export default MessageProfilePopupScreen;
