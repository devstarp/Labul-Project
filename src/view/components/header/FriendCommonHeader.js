import React from 'react';
import { View } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonHeader from 'view/components/header/CommonHeader';
import TitleText from 'view/components/text/TitleText';

const FriendCommonHeader = (props) => {
  return (
    <View style={styles.header}>
      <CommonHeader
        dark={true}
        leftTxt={props.searchIn ? 'Annuler' : null}
        centerTxt={props.upperTitle}
        rightView={<View width={44 * em} height={44 * em} />}
        style={styles.commonHeader}
      />
      <TitleText text={props.title} style={styles.title} />
    </View>
  );
};

const styles = {
  header: { paddingBottom: 10 * hm },
  commonHeader: { marginTop: 27 * hm },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 10 * hm,
  },
};

export default FriendCommonHeader;
