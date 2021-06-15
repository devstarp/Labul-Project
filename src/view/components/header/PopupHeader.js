import React from 'react';
import { View, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonBackButton from 'view/components/button/CommonBackButton';
import CommonHeader from './CommonHeader';

const PopupHeader = (props) => {
  let icon = require('assets/images/ic_profile.png');
  if (props.icon) {
    icon = props.icon;
  }
  return (
    <CommonHeader
      style={[styles.container, props.style]}
      dark
      centerView={<View style={styles.iconWrapper}>{props.icon}</View>}
      rightView={<View style={styles.backBtnWrapper} />}
    />
  );
  // return (
  //   <View style={[styles.container, props.style]}>
  //     <CommonBackButton dark />
  //     <View style={styles.iconWrapper}>{props.icon}</View>
  //     <View style={styles.backBtnWrapper} />
  //   </View>
  // );
};

const styles = {
  container: {
    marginTop: 20 * hm,
    paddingHorizontal: 15 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backBtnWrapper: {
    width: 44 * em,
    height: 44 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  icon: { width: 20 * em, height: 25 * em, resizeMode: 'contain' },
};

export default PopupHeader;
