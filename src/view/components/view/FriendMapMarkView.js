import React from 'react';
import { View, Image, ImageBackground } from 'react-native';
import { em, hm } from 'view/common/const';
import AvatarWithBadge from './AvatarWithBadge';

const rectPath = require('assets/images/path.png');
const circlePath = require('assets/images/circular_path_with_shadow.png');

const FriendMapMarkView = ({ top, left, photo, badge, bgColor, id, style }) => {
  const marginTop = -10 * em;
  const marginLeft = photo ? -18 * em : -20 * em;
  const width = photo ? 112 * em : 76 * em;
  const height = photo ? 84 * em : 76 * em;
  return (
    <ImageBackground
      style={[
        styles.bgImage,
        style,
        {
          width: width,
          height: height,
          top: top + marginTop,
          left: left + marginLeft,
        },
      ]}
      key={id}
      source={photo ? rectPath : circlePath}>
      <View style={[styles.innerView, { backgroundColor: bgColor, marginTop: -marginTop }]}>
        {photo && <AvatarWithBadge avatarDiameter={36 * em} avatar={photo} />}
        <View style={styles.badgeView}>{badge}</View>
      </View>
    </ImageBackground>
  );
};

const styles = {
  bgImage: { position: 'absolute', alignItems: 'center' },
  badgeView: { width: 36 * em, height: 36 * em, alignItems: 'center', justifyContent: 'center' },
  innerView: {
    zIndex: 1,
    position: 'absolute',
    borderRadius: 18 * em,
    flexDirection: 'row',
  },
};

export default FriendMapMarkView;
