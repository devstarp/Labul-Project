import React from 'react';
import { em } from 'view/common/const';
import CommonHeader from './CommonHeader';

const ProfileModalHeader = (props) => {
  return (
    <CommonHeader
      style={[styles.container, props.style]}
      leftTxt={'Annuler'}
      centerTxt={props.title}
      rightTxt={'Terminer'}
      onLeftPress={() => props.onCancelPress()}
      onRightPress={() => props.onFinishPress()}
      rightTxtStyle={styles.rightTxt}

    />
  );
};

const styles = {
  container: { marginHorizontal: -30 * em },
  btn: {
    lineHeight: 18 * em,
  },
  title: { fontFamily: 'Lato-Bold' },
  rightTxt: { color: '#40CDDE', fontSize: 16 * em, marginRight: 12 * em },

};

export default ProfileModalHeader;
