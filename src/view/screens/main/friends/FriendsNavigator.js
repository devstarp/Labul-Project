import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { em, hm } from 'view/common/const';
import FriendsListScreen from './FriendsListScreen';
import FriendsMapScreen from './FriendsMapScreen';
import CommonBlueHeader from 'view/components/header/CommonBlueHeader';
import SwitchButton from 'view/components/button/SwitchButton';
import { Actions } from 'react-native-router-flux';
import { MagnifierBlue, Filter } from 'assets/svg/icons';
const Tab = createMaterialTopTabNavigator();

export default function FriendsNavigator(props) {
  const [activeTab, setActiveTab] = React.useState(1);
  return (
    <View style={styles.TabBarMainContainer}>
      <Tab.Navigator
        tabBar={() => null}
        swipeEnabled={false}
        initialRouteName={props.route.params.friendNav || 'Carte'}>
        <Tab.Screen name="Carte" component={FriendsMapScreen} />
        <Tab.Screen name="Liste" component={FriendsListScreen} />
      </Tab.Navigator>
      <View style={styles.TabControlContainer}>
        <CommonBlueHeader />
        <View style={styles.TabButtonContainer}>
          <TouchableOpacity
            style={styles.functionBtn}
            shadowOffset={{ height: 10 }}
            shadowColor="black"
            shadowOpacity={0.5}
            onPress={() => {
              Actions.friendsSearch();
            }}>
            <MagnifierBlue width={20 * em} height={20 * em} />
          </TouchableOpacity>

          <SwitchButton
            onValueChange={(val) => {
              setActiveTab(val);
              // console.log(props.navigation);
              if (val === 1) {
                props.navigation.jumpTo('Carte');
              } else {
                props.navigation.jumpTo('Liste');
              }
            }}
            value={props.route.params.friendNav === 'Liste' ? 2 : 1}
            text1="Carte"
            text2="Liste"
            switchWidth={134 * em}
            switchHeight={46 * em}
            switchdirection="ltr"
            switchBorderColor="#ffffff"
            switchBackgroundColor="#fff"
            btnBorderColor="#ffffff"
            btnBackgroundColor="#1E2D60"
            fontColor="#6A8596"
            activeFontColor="#fff"
            style={styles.switch}
          />
          <TouchableOpacity
            style={styles.functionBtn}
            onPress={() => {
              Actions.friendsFilter();
            }}>
            <Filter width={20 * em} height={16 * em} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarMainContainer: { backgroundColor: '#F0F5F7', flex: 1 },
  functionBtn: {
    width: 46 * em,
    height: 46 * em,
    borderRadius: 23 * em,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#254D56',
    shadowOffset: { width: 0, height: 16 * hm },
    shadowOpacity: 0.45,
    shadowRadius: 24 * em,
  },
  TabControlContainer: { position: 'absolute', flex: 1, width: '100%' },
  TabButtonContainer: {
    alignItems: 'center',
    paddingHorizontal: 20 * em,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15 * hm,
  },
  switch: {
    npx
  },
});
