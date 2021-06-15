import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { em } from 'view/common/const';
import CommonListItem from 'view/components/adapter/CommonListItem';
import UserType from 'model/user/UserType';
import { Friend, Family, Neighbor, OptionGray } from 'assets/svg/icons';
import RelationshipType from 'model/user/RelationshipType';

const groupIcons = [
  {
    type: RelationshipType.FRIEND,
    icon: <Friend width={40 * em} height={40 * em} marginRight={15 * em} />,
    unit: 'ami',
  },
  {
    type: RelationshipType.FAMILIY,
    icon: <Family width={40 * em} height={40 * em} marginRight={15 * em} />,
    unit: 'familie',
  },
  {
    type: RelationshipType.NEIGHBOR,
    icon: <Neighbor width={40 * em} height={40 * em} marginRight={15 * em} />,
    unit: 'voisin',
  },
];

const CirclesCommonListItem = (props) => {
  var optionBtn = (
    <View style={styles.optionBtn}>
      <OptionGray width={30 * em} height={30 * em} />
    </View>
  );
  var icon = <Image source={props.icon} style={styles.icon} />;
  if (props.iconSize) {
    icon = <Image source={props.icon} style={styles.icon} />;
  }
  if (props.type === UserType.GROUP) {
    const groupIcon = groupIcons.find((item) => item.type === props.sort);

    return (
      <View style={[styles.container, props.style]}>
        <CommonListItem
          title={props.name}
          subTitle={props.subName + ' ' + groupIcon.unit + 's'}
          subTitleStyle={styles.relationshipStyle}
          titleStyle={styles.userNameStyle}
          icon={groupIcon.icon}
          style={{ flex: 1 }}
          onPress={props.onLeftPress}
        />
        <TouchableOpacity onPress={() => props.onRightPress()}>{optionBtn}</TouchableOpacity>
      </View>
    );
  }
  return (
    <CommonListItem
      title={props.name}
      subTitle={props.subName}
      titleStyle={styles.userNameStyle}
      icon={icon}
      subTitleStyle={styles.relationshipStyle}
      rightView={optionBtn}
      style={props.style}
      onPress={props.onPress}
    />
  );
};
export default CirclesCommonListItem;
const styles = {
  icon: { borderRadius: 20 * em, width: 40 * em, height: 40 * em, marginRight: 15 * em },
  userNameStyle: { fontFamily: 'Lato-Black', color: '#1E2D60', textAlign: 'left' },
  relationshipStyle: {
    fontSize: 16 * em,
    color: '#A0AEB8',
    textAlign: 'left',
    height: 18 * em,
  },
  optionBtn: {
    backgroundColor: 'transparent',
    tintColor: '#84848442',
    width: 30 * em,
    height: 30 * em,
    marginTop: 5 * em,
  },
  container: { flexDirection: 'row', justifyContent: 'space-between' },
};
