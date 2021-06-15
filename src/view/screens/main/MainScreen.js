import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FriendsNavigator from './friends/FriendsNavigator';
import CalendarHomeScreen from './calendar/CalendarHomeScreen';
import MyActivityHomeScreen from './activity/MyActivityHomeScreen';
import ProfileHomeScreen from './profile/ProfileHomeScreen';
import ProProfileHomeScreen from './profile/proProfile/ProProfileHomeScreen';
import MabulHomeScreeen from './mabul/MabulHomeScreen';
import { em, hm } from 'view/common/const';
import { navigationRef } from './RootNavigation';
import MyNotificationsScreen from './activity/MyNotificationsScreen';
import MainTabBar from 'view/components/tabbar/MainTabBar';

const Tab = createBottomTabNavigator();

export default function MainScreen(props) {
  return (
    <View style={styles.TabBarMainContainer}>
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator
          tabBar={(props) => <MainTabBar {...props} />}
          initialRouteName={props.tabNav ? props.tabNav : 'Friends'}>
          <Tab.Screen
            name="Friends"
            component={FriendsNavigator}
            initialParams={{ friendNav: props.friendNav || 'Carte' }}
          />
          <Tab.Screen name="Calendar" component={CalendarHomeScreen} />
          <Tab.Screen name="Mabul" component={MabulHomeScreeen} />
          <Tab.Screen
            name="Activity"
            component={MyActivityHomeScreen}
            initialParams={{ activityType: props.activityType || 'needs', noEmpty: props.noEmpty }}
          />
          <Tab.Screen name="Profile" component={ProfileHomeScreen} initialParams={{ purchased: props.purchased }} />
          <Tab.Screen
            name="ProProfile"
            component={ProProfileHomeScreen}
            initialParams={{
              accountType: props.accountType,
              purchased: props.purchased,
            }}
          />
          <Tab.Screen name="MyNotifictions" component={MyNotificationsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = {
  TabBarMainContainer: { flex: 1 },
};
