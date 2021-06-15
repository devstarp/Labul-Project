import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';

const AvatarWithBadge = (props) => {
  const BadgeIcon =
    typeof props.badge === 'number' ? (
      <Image
        source={props.badge}
        style={{
          width: props.badgeDiameter,
          height: props.badgeDiameter,
          borderRadius: props.badgeDiameter / 2,
        }}
      />
    ) : (
      props.badge
    );

  const additionalBadgeStyle = {
    width: props.badgeDiameter + 4 * em,
    height: props.badgeDiameter + 4 * em,
    borderRadius: (props.badgeDiameter + 4 * em) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  };
  const Avatar = (
    <>
      <Image
        source={props.avatar}
        style={{ width: props.avatarDiameter, height: props.avatarDiameter, borderRadius: props.avatarDiameter / 2 }}
      />
      {props.badge && <View style={[styles.badge, additionalBadgeStyle]}>{BadgeIcon}</View>}
    </>
  );
  if (props.onPress) {
    return (
      <TouchableOpacity style={[styles.avtarView, props.style]} onPress={() => props.onPress()}>
        {Avatar}
      </TouchableOpacity>
    );
  } else {
    return <View style={[styles.avtarView, props.style]}>{Avatar}</View>;
  }
};

const styles = {
  badge: {
    marginLeft: -17 * em,
    alignSelf: 'flex-end',
    marginBottom: -3 * em,
    borderColor: '#ffffff',
    zIndex: 1,
  },
  avtarView: { flexDirection: 'row' },
};

export default AvatarWithBadge;
