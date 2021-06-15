import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoadingScreen from 'view/screens/LoadingScreen';
import HomeScreen from 'view/screens/HomeScreen';
import LoginMenuScreen from 'view/screens/account/LoginMenuScreen';
import SignupMenuScreen from 'view/screens/account/SignupMenuScreen';
import MainScreen from 'view/screens/main/MainScreen';
import LoginScreen from 'view/screens/account/LoginScreen';
import ForgotPasswordScreen from 'view/screens/account/ForgotPasswordScreen';
import RegisterEmailScreen from 'view/screens/account/RegisterEmailScreen';
import RegisterNameScreen from 'view/screens/account/RegisterNameScreen';
import RegisterFamilyNameScreen from 'view/screens/account/RegisterFamilyNameScreen';
import RegisterMobileScreen from 'view/screens/account/RegisterMobileScreen';
import RegisterAddressScreen from 'view/screens/account/RegisterAddressScreen';
import ActivateLocationScreen from 'view/screens/account/ActivateLocationScreen';
import ActivateNotificationScreen from 'view/screens/account/ActivateNotificationScreen';
import MabulHomeScreen from 'view/screens/main/mabul/MabulHomeScreen';
import MabulOrganizeScreen from 'view/screens/main/mabul/organize/MabulOrganizeScreen';
import MabulSellScreen from 'view/screens/main/mabul/sell/MabulSellScreen';
import MabulNeedScreen from 'view/screens/main/mabul/need/MabulNeedScreen';
import MabulDailyNeedScreen from 'view/screens/main/mabul/need/MabulDailyNeedScreen';

import MabulGiveScreen from 'view/screens/main/mabul/give/MabulGiveScreen';
import MabulSearchScreen from 'view/screens/main/mabul/search/MabulSearchScreen';
import ProfileOverviewScreen from 'view/screens/main/profile/ProfileOverviewScreen';
import MabulSellServiceScreen from 'view/screens/main/mabul/sell/MabulSellServiceScreen';
import FriendsSearchScreen from 'view/screens/main/friends/FriendSearchScreen';
import FriendsFilterScreen from 'view/screens/main/friends/FriendsFilterScreen';
import MyInformationScreen from 'view/screens/main/profile/MyInformationScreen';
import MySettingScreen from 'view/screens/main/profile/MySettingScreen';
import PremiumSubscriptionScreen from 'view/screens/main/profile/PremiumSubscriptionScreen';
import PremiumPurchasedScreen from 'view/screens/main/profile/PremiumPurchasedScreen';
import FriendOrganizeScreen from 'view/screens/main/friends/FriendOrganizeScreen';
import CreateAccountMenuScreen from 'view/screens/main/profile/proProfile/CreateAccountMenuScreen';
import FriendSellScreen from 'view/screens/main/friends/FriendSellScreen';
import MabulFamilyNeedScreen from 'view/screens/main/mabul/need/MabulFamilyNeedScreen';
import MabulSellObjectScreen from 'view/screens/main/mabul/sell/MabulSellObjectScreen';
import MabulSellEnvironmentScreen from 'view/screens/main/mabul/sell/MabulSellEnvironmentScreen';

import InputLocationScreen from 'view/screens/main/friends/InputLocationScreen';
import PrivacyPolicyScreen from 'view/screens/main/profile/PrivacyPolicyScreen';
import TermsOfServiceScreen from 'view/screens/main/profile/TermsOfServiceScreen';
import ProRegisterMobilScreen from 'view/screens/main/profile/proProfile/ProRegisterMobilScreen';
import ProRegisterAddressScreen from 'view/screens/main/profile/proProfile/ProRegisterAddressScreen';
import ProRegisterEmailScreen from 'view/screens/main/profile/proProfile/ProRegisterEmailScreen';
import MabulCommonAddPhotoScreen from 'view/screens/main/mabul/MabulCommonAddPhotoScreen';
import MabulCommonDateSettingScreen from 'view/screens/main/mabul/MabulCommonDateSettingScreen';
import MabulNeedParticipantScreen from 'view/screens/main/mabul/need/MabulNeedParticipantScreen';
import MabulCommonShareScreen from 'view/screens/main/mabul/MabulCommonShareScreen';
import MabulCommonRequestDetailScreen from 'view/screens/main/mabul/MabulCommonRequestDetailScreen';
import UserProfileScreen from 'view/screens/main/friends/UserProfileScreen';
import FriendNeedScreen from 'view/screens/main/friends/FriendNeedScreen';
import ActivityMessageScreen from 'view/screens/main/activity/ActivityMessageScreen';
import ActivityDialScreen from 'view/screens/main/activity/ActivityDialScreen';
import AlertCircleSelectionScreen from 'view/screens/main/alert/AlertCircleSelectionScreen';
import AlertClassOptionScreen from 'view/screens/main/alert/AlertClassOptionScreen';
import AlertAddressScreen from 'view/screens/main/alert/AlertAddressScreen';
import AlertAddNoteScreen from 'view/screens/main/alert/AlertAddNoteScreen';
import AlertShareScreen from 'view/screens/main/alert/AlertShareScreen';
import EditProfileScreen from 'view/screens/main/profile/EditProfileScreen';
import EditProProfileScreen from 'view/screens/main/profile/proProfile/EditProProfileScreen';
import ProProfileOverviewScreen from 'view/screens/main/profile/proProfile/ProProfileOverviewScreen';
import ProfileHomeScreen from 'view/screens/main/profile/ProfileHomeScreen';
import MyNeedScreen from 'view/screens/main/profile/myDemands/MyNeedScreen';
import EditNeedScreen from 'view/screens/main/profile/myDemands/EditNeedScreen';

import MyOrganizeScreen from 'view/screens/main/profile/myDemands/MyOrganizeScreen';
import FriendGiveBadgeScreen from 'view/screens/main/friends/FriendGiveBadgeScreen';
import MyDemandsHomeScreen from 'view/screens/main/profile/myDemands/MyDemandsHomeScreen';
import MyCirclesHomeScreen from 'view/screens/main/profile/myCircles/MyCirclesHomeScreen';
import CreateGroupScreen from 'view/screens/main/profile/myCircles/CreateGroupScreen';
import ProNeedsHomeScreen from 'view/screens/main/profile/proProfile/proNeeds/ProNeedsHomeScreen';

import MyAlertScreen from 'view/screens/main/profile/myDemands/MyAlertScreen';
import ProSellScreen from 'view/screens/main/profile/proProfile/proNeeds/ProSellScreen';
import GroupDetailScreen from 'view/screens/main/profile/myCircles/GroupDetailScreen';
import ProProfileHomeScreen from 'view/screens/main/profile/proProfile/ProProfileHomeScreen';
import ProInformationScreen from 'view/screens/main/profile/proProfile/ProInformationScreen';
import MabulNeedSortScreen from 'view/screens/main/mabul/need/MabulNeedSortScreen';
import NameGroupScreen from 'view/screens/main/profile/myCircles/NameGroupScreen';
import MabulSellPriceScreen from 'view/screens/main/mabul/sell/MabulSellPriceScreen';
import MabulOrganizeParticipationScreen from 'view/screens/main/mabul/organize/MabulOrganizeParticipationScreen';
import ProSettingScreen from 'view/screens/main/profile/proProfile/ProSettingScreen';
import EditProNeedScreen from 'view/screens/main/profile/proProfile/proNeeds/EditProNeedScreen';
import ProRegisterIDSCreen from 'view/screens/main/profile/proProfile/ProRegisterIDSCreen';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="loading" hideNavBar component={LoadingScreen} />
          <Scene key="home" hideNavBar component={HomeScreen} />

          <Scene key="myNeed" hideNavBar component={MyNeedScreen} />
          <Scene key="myAlert" hideNavBar component={MyAlertScreen} />
          <Scene key="proSell" hideNavBar component={ProSellScreen} />
          <Scene key="groupDetail" hideNavBar component={GroupDetailScreen} />

          <Scene key="myOrganize" hideNavBar component={MyOrganizeScreen} />

          <Scene key="editNeed" hideNavBar component={EditNeedScreen} />

          <Scene key="friendOrganize" hideNavBar component={FriendOrganizeScreen} />
          <Scene key="friendSell" hideNavBar component={FriendSellScreen} />
          <Scene key="friendNeed" hideNavBar component={FriendNeedScreen} />
          <Scene key="friendGiveBadge" hideNavBar component={FriendGiveBadgeScreen} />

          <Scene key="loginMenu" hideNavBar component={LoginMenuScreen} />
          <Scene key="signupMenu" hideNavBar component={SignupMenuScreen} />
          <Scene key="main" hideNavBar component={MainScreen} />
          <Scene key="login" hideNavBar component={LoginScreen} />
          <Scene key="forgotPassword" hideNavBar component={ForgotPasswordScreen} />

          <Scene key="registerEmail" hideNavBar component={RegisterEmailScreen} />
          <Scene key="registerName" hideNavBar component={RegisterNameScreen} />
          <Scene key="registerFamilyName" hideNavBar component={RegisterFamilyNameScreen} />
          <Scene key="registerMobile" hideNavBar component={RegisterMobileScreen} />
          <Scene key="registerAddress" hideNavBar component={RegisterAddressScreen} />
          <Scene key="activateLocation" hideNavBar component={ActivateLocationScreen} />
          <Scene key="activateNotification" hideNavBar component={ActivateNotificationScreen} />

          <Scene key="friendsSearch" hideNavBar component={FriendsSearchScreen} />
          <Scene key="friendsFilter" hideNavBar component={FriendsFilterScreen} />
          <Scene key="userProfile" hideNavBar component={UserProfileScreen} />
          <Scene key="inputLocation" hideNavBar component={InputLocationScreen} />

          <Scene key="mabulOrganizeParticipation" hideNavBar component={MabulOrganizeParticipationScreen} />
          <Scene key="mabulOrganize" hideNavBar component={MabulOrganizeScreen} />

          <Scene key="alertCircles" hideNavBar component={AlertCircleSelectionScreen} />
          <Scene key="alertClass" hideNavBar component={AlertClassOptionScreen} />
          <Scene key="alertAddress" hideNavBar component={AlertAddressScreen} />
          <Scene key="alertAddNote" hideNavBar component={AlertAddNoteScreen} />
          <Scene key="alertShare" hideNavBar component={AlertShareScreen} />

          <Scene key="mabulSell" hideNavBar component={MabulSellScreen} />
          <Scene key="mabulSellService" hideNavBar component={MabulSellServiceScreen} />
          <Scene key="mabulSellObject" hideNavBar component={MabulSellObjectScreen} />
          <Scene key="mabulSellEnvironment" hideNavBar component={MabulSellEnvironmentScreen} />
          <Scene key="mabulSellPrice" hideNavBar component={MabulSellPriceScreen} />

          <Scene key="mabulNeed" hideNavBar component={MabulNeedScreen} />
          <Scene key="mabulFamilyNeed" hideNavBar component={MabulFamilyNeedScreen} />
          <Scene key="mabulDailyNeed" hideNavBar component={MabulDailyNeedScreen} />
          <Scene key="mabulNeedSort" hideNavBar component={MabulNeedSortScreen} />

          <Scene key="activityMessage" hideNavBar component={ActivityMessageScreen} />
          <Scene key="activityDial" hideNavBar component={ActivityDialScreen} />

          <Scene key="mabulSearch" hideNavBar component={MabulSearchScreen} />
          <Scene key="mabulGive" hideNavBar component={MabulGiveScreen} />

          <Scene key="mabulCommonRequestDetail" hideNavBar component={MabulCommonRequestDetailScreen} />
          <Scene key="mabulCommonAddPhoto" hideNavBar component={MabulCommonAddPhotoScreen} />
          <Scene key="mabulCommonDateSetting" hideNavBar component={MabulCommonDateSettingScreen} />
          <Scene key="mabulNeedParticipate" hideNavBar component={MabulNeedParticipantScreen} />
          <Scene key="mabulCommonShare" hideNavBar component={MabulCommonShareScreen} />

          <Scene key="profileOverview" hideNavBar component={ProfileOverviewScreen} />
          <Scene key="myInformation" hideNavBar component={MyInformationScreen} />
          <Scene key="editProfile" hideNavBar component={EditProfileScreen} />

          <Scene key="createAccountMenu" hideNavBar component={CreateAccountMenuScreen} />
          <Scene key="proRegisterID" hideNavBar component={ProRegisterIDSCreen} />

          <Scene key="proRegisterMobile" hideNavBar component={ProRegisterMobilScreen} />
          <Scene key="proRegisterAddress" hideNavBar component={ProRegisterAddressScreen} />
          <Scene key="proRegisterEmail" hideNavBar component={ProRegisterEmailScreen} />
          <Scene key="proProfileHome" hideNavBar component={ProProfileHomeScreen} />
          <Scene key="profileHome" hideNavBar component={ProfileHomeScreen} />
          <Scene key="proNeedsHome" hideNavBar component={ProNeedsHomeScreen} />
          <Scene key="editProNeed" hideNavBar component={EditProNeedScreen} />

          <Scene key="proInformation" hideNavBar component={ProInformationScreen} />
          <Scene key="proSetting" hideNavBar component={ProSettingScreen} />

          <Scene key="editProProfile" hideNavBar component={EditProProfileScreen} />
          <Scene key="proProfileOverview" hideNavBar component={ProProfileOverviewScreen} />

          <Scene key="mySetting" hideNavBar component={MySettingScreen} />
          <Scene key="premiumSubscription" hideNavBar component={PremiumSubscriptionScreen} />
          <Scene key="premiumPurchased" hideNavBar component={PremiumPurchasedScreen} />
          <Scene key="mabulHome" hideNavBar component={MabulHomeScreen} />
          <Scene key="myDemandsHome" hideNavBar component={MyDemandsHomeScreen} />

          <Scene key="myCirclesHome" hideNavBar component={MyCirclesHomeScreen} />
          <Scene key="createGroup" hideNavBar component={CreateGroupScreen} />
          <Scene key="nameGroup" hideNavBar component={NameGroupScreen} />

          <Scene key="privacyPolicy" hideNavBar component={PrivacyPolicyScreen} />
          <Scene key="termsOfService" hideNavBar component={TermsOfServiceScreen} />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
