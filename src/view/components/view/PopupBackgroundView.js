import React from 'react';
import { View } from 'react-native';
import { em, hm } from 'view/common/const';

const PopupBackgroundView = () => {
  return (
    <View
      style={{
        width: 349 * em,
        height: 20 * hm,
        marginTop: -10 * hm,
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20 * em,
        borderTopRightRadius: 20 * em,
      }}
      opacity={0.5}
    />
  );
};
export default PopupBackgroundView;
