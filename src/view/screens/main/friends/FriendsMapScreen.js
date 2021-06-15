import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import {
  Animals,
  Bricolage,
  HomeCare,
  Interview,
  Workshop,
  TransportInner,
  Path,
  Return2Point,
  Alert,
  MealPreparationOrganize,
  Navigator,
} from 'assets/svg/icons';
import ShadowCircularButton from 'view/components/button/ShadowCircularButton';
import FriendMapMarkView from 'view/components/view/FriendMapMarkView';
import { Actions } from 'react-native-router-flux';
const servicIconSize = { width: 18 * em, height: 18 * em };
const locationList = [
  {
    id: '0',
    top: 205 * hm,
    left: 36 * em,
    avatar: require('assets/images/avatars/rober-dupont-116x116.png'),
    serviceIcon: Animals(servicIconSize),
    bgColor: 'rgba(56, 194, 255, 0.2)',
  },
  {
    id: '1',
    top: 164 * hm,
    left: 181 * em,
    avatar: require('assets/images/logos/arbre-de-vie-76x76.png'),
    serviceIcon: Interview(servicIconSize),
    bgColor: 'rgba(170, 135, 229, 0.2)',
  },
  {
    id: '2',
    top: 273 * hm,
    left: 211 * em,
    avatar: require('assets/images/avatars/joseph-martin-116x116.png'),
    serviceIcon: TransportInner(servicIconSize),
    bgColor: 'rgba(56, 194, 255, 0.2)',
  },
  {
    id: '3',
    top: 321 * hm,
    left: 149 * em,
    avatar: require('assets/images/avatars/amandine-bernard-116x116.png'),
    serviceIcon: Bricolage(servicIconSize),
    bgColor: 'rgba(56, 194, 255, 0.2)',
  },
  {
    id: '4',
    top: 396 * hm,
    left: 72 * em,
    avatar: require('assets/images/logos/la-belle-coiffure-76x76.png'),
    serviceIcon: HomeCare(servicIconSize),
    bgColor: 'rgba(170, 135, 229, 0.2)',
  },
  {
    id: '5',
    top: 490 * hm,
    left: 170 * em,
    avatar: require('assets/images/avatars/sarah-dupont-116x116.png'),
    serviceIcon: MealPreparationOrganize(servicIconSize),
    bgColor: 'rgba(253, 198, 65, 0.2)',
  },
  {
    id: '6',
    top: 335 * hm,
    left: 297 * em,
    serviceIcon: Interview(servicIconSize),
    bgColor: 'rgba(170, 135, 229, 0.2)',
  },
  {
    id: '7',
    top: 463 * hm,
    left: 34 * em,
    serviceIcon: Workshop(servicIconSize),
    bgColor: 'rgba(253, 198, 65, 0.2)',
  },
];

const FriendsMapScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.TabControlContainer} source={require('assets/images/bg_map.png')} />
      <View
        style={{
          position: 'absolute',
          top: 316 * hm,
          zIndex: 0,
          backgroundColor: 'rgba(64, 205, 222, 0.1)',
          width: 110.75 * em,
          height: 110.75 * em,
          borderRadius: 55 * em,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Navigator width={34.73 * em} height={39.793 * em} />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 213 * hm,
          left: 309 * em,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 3,
          shadowColor: '#254D5621',
          shadowOffset: {
            width: 0,
            height: 5 * hm,
          },
          shadowRadius: 9 * em,
        }}>
        <Image source={require('assets/images/img_alert.png')} />
      </View>
      {locationList.map((location) => {
        return (
          <FriendMapMarkView
            id={location.id}
            top={location.top}
            left={location.left}
            photo={location.avatar}
            badge={location.serviceIcon}
            bgColor={location.bgColor}
          />
        );
      })}

      <ShadowCircularButton
        style={{
          position: 'absolute',
          top: 509 * hm,
          left: 309 * em,
          zIndex: 2,
        }}
        icon={Return2Point(servicIconSize)}
      />
      <ShadowCircularButton
        style={{
          position: 'absolute',
          top: 443 * hm,
          left: 309 * em,
          zIndex: 1,
        }}
        icon={Alert({ width: 26.45 * em, height: 22.31 * em })}
        onPress={() => Actions.alertCircles()}
      />
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'center' },
  TabControlContainer: { position: 'absolute', flex: 1, width: '100%', height: '100%' },
  alertImg: {
    width: 46 * em,
    height: 46 * em,
    position: 'absolute',
    resizeMode: 'contain',
    top: 463 * hm,
    left: 309 * em,
  },
};

export default FriendsMapScreen;
