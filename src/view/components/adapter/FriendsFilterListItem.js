import { TouchableOpacity, View } from 'react-native';
import React from 'react';
import { em, hm } from 'view/common/const';
import CommonListItem from 'view/components/adapter/CommonListItem';
import { RightArrow } from 'assets/svg/icons';

const FriendsFilterListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <CommonListItem
        style={props.style}
        title={props.title}
        titleStyle={styles.textTitle}
        commentStyle={[styles.defaultSetting, { color: props.defaultSetting !== 'Toutes' ? '#40CDDE' : '#A0AEB8' }]}
        comment={props.defaultSetting}
        icon={<View style={styles.iconContainer}>{props.icon}</View>}
        onPress={props.onPress}
        rightView={
          <View style={{ justifyContent: 'flex-end', flex: 1 }}>
            <RightArrow width={11 * em} height={18 * hm} />
          </View>
        }
      />
    </TouchableOpacity>
  );
};
export default FriendsFilterListItem;
const styles = {
  iconContainer: { marginRight: 15 * em, flex: 1, width: 20 * em, alignItems: 'flex-end' },
  textTitle: { fontFamily: 'Lato-Bold', fontSize: 18 * em, color: '#1E2D60' },
  defaultSetting: { marginTop: 10 * em, marginLeft: 35 * em, fontSize: 16 * em, color: '#A0AEB8', textAlign: 'left' },
  arrowIcon: { backgroundColor: 'white', width: 11 * em, height: 18 * em, marginTop: 2 * em },
};
