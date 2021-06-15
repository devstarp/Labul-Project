import {
  TabPlus,
  TabCalendarOff,
  TabCalendarOn,
  TabCardOff,
  TabCardOn,
  TabMessageOff,
  TabMessageOn,
} from 'assets/svg/icons';
import ShadowCircularButton from 'view/components/button/ShadowCircularButton';
import * as React from 'react';
import { em, hm } from 'view/common/const';
import { View, TouchableOpacity, Image } from 'react-native';
import MabulHomeScreeen from 'view/screens/main/mabul/MabulHomeScreen';
import Modal from 'react-native-modal';

const myPhoto = require('assets/images/avatars/mathieu-torin-116x116.png');
const proPhoto = require('assets/images/avatar_curology.png');

const MainTabBar = ({ state, descriptors, navigation }) => {
  const [mabulVisible, setMabulVisible] = React.useState(false);
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const TabIcons = [
    { on: TabCardOn(styles.TapImage), off: TabCardOff(styles.TapImage) },
    {
      on: TabCalendarOn({ width: 22 * em, height: 22 * em }),
      off: TabCalendarOff({ width: 22 * em, height: 22 * em }),
    },
    {
      on: <ShadowCircularButton style={{ zIndex: 1 }} icon={TabPlus(styles.AddImage)} onPress={() => setMabulVisible(true)} />,
      off: <ShadowCircularButton style={{ zIndex: 1 }} icon={TabPlus(styles.AddImage)} onPress={() => setMabulVisible(true)} />,
    },
    { on: TabMessageOn(styles.TapImage), off: TabMessageOff(styles.TapImage) },
  ];

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.VirtualTabButtons}>
      <Image source={require('assets/images/tab_bar.png')} style={styles.tabBarImg} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const tabIcon =
          index <= 3 && (isFocused || (state.index === 6 && index === 3) ? TabIcons[index].on : TabIcons[index].off);
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            index !== 2 && navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        if (route.name === 'MyNotifictions') {
          return <></>;
        }
        if (route.name === 'ProProfile') {
          return <></>;
        }
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ marginBottom: index === 2 ? -8 * hm : 0, width: index === 2 ? 46 * em : 22 * em }}>
            {tabIcon}
            {index === 4 && (
              <View
                style={[styles.photoWrapper, { borderColor: isFocused || state.index === 5 ? '#4BD8E9' : '#ffffff' }]}>
                <Image source={state.index === 5 ? proPhoto : myPhoto} style={styles.TapImage} />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
      <Modal backdropColor={'transparent'} style={styles.modalStyle} isVisible={mabulVisible}>
        <MabulHomeScreeen
          onClosePress={() => {
            setMabulVisible(false);
          }}
        />
      </Modal>
    </View>
  );
};
export default MainTabBar;
const styles = {
  tabBarImg: { width: 429 * em, left: -27 * em, bottom: -27 * hm, height: 124 * hm, position: 'absolute' },
  modalStyle: { margin: 0 },
  VirtualTabButtons: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 30 * hm,
    justifyContent: 'space-around',
  },
  AddImage: { width: 46 * em, height: 46 * em },
  TapImage: { width: 22 * em, height: 22 * em, borderRadius: 11 * em },
  photoWrapper: {
    width: 24 * em,
    height: 24 * em,
    borderWidth: 2 * em,
    borderRadius: 14 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
