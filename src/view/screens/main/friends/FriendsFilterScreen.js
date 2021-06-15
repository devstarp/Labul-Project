import React, { useState } from 'react';
import { View } from 'react-native';
import { em, hm } from 'view/common/const';
import FriendsFilterListItem from 'view/components/adapter/FriendsFilterListItem';
import CommonListItem from 'view/components/adapter/CommonListItem';
import CommonText from 'view/components/text/CommonText';
import Switch from 'view/components/other/Switch';
import { Actions } from 'react-native-router-flux';
import FriendsFilterRequestModalScreen from './popup/FriendsFilterRequestModalScreen';
import FriendsFilterDateModalScreen from './popup/FriendsFilterDateModalScreen';
import FriendCommonHeader from 'view/components/header/FriendCommonHeader';
import { Calendar, TypeRequest, Address } from 'assets/svg/icons';
const FriendsFilterScreen = () => {
  const [filterRequestModalVisible, setfilterRequestModalVisible] = useState(false);
  const [filterDateModalVisible, setfilterDateModalVisible] = useState(false);
  const [typeFilters, setTypeFilters] = useState();
  return (
    <View style={styles.container}>
      <FriendCommonHeader title="Filtrer" />
      <View style={{ marginTop: 35 * hm }}>
        <FriendsFilterListItem
          title={'Type de demande'}
          defaultSetting={'Toutes'}
          onSelected={(result) => setTypeFilters(result)}
          style={styles.listItem}
          icon={TypeRequest({ width: 20 * em, height: 20 * em })}
          onPress={() => {
            setfilterRequestModalVisible(true);
          }}
        />
        <View style={styles.line} />
        <FriendsFilterListItem
          title={'Date'}
          defaultSetting={'Toutes'}
          style={styles.listItem}
          icon={Calendar({ width: 18 * em, height: 20 * em })}
          onPress={() => {
            setfilterDateModalVisible(true);
          }}
        />
        <View style={styles.line} />
        <FriendsFilterListItem
          title={'Lieu'}
          defaultSetting={'Autour de moi'}
          style={styles.listItem}
          icon={Address({ width: 16 * em, height: 20 * em })}
          onPress={() => {
            Actions.inputLocation();
          }}
        />
        <View style={[styles.line, { marginLeft: 0 }]} />
        <CommonListItem
          style={styles.switchContainer}
          title="Voir les demandes des pro et particuliers"
          titleStyle={styles.textSwitch}
          rightView={
            <Switch
              value={1}
              style={styles.switch}
              switchWidth={50 * em}
              switchHeight={28 * em}
              switchdirection="ltr"
              switchBorderColor="#ffffff"
              switchBackgroundColor="#40CDDE"
              btnBackgroundColor="#FFFFFF"
            />
          }
        />
      </View>
      <View />

      <FriendsFilterRequestModalScreen
        visible={filterRequestModalVisible}
        onPress={() => {
          setfilterRequestModalVisible(false);
        }}
      />
      <FriendsFilterDateModalScreen
        visible={filterDateModalVisible}
        onPress={() => {
          setfilterDateModalVisible(false);
        }}
      />
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'flex-start', backgroundColor: '#ffffff' },
  listItem: { marginLeft: 30 * em, marginRight: 30 * em, width: 315 * em },
  title: { marginLeft: 30 * em, marginBottom: 35 * hm },
  line: { height: 1 * hm, marginLeft: 65 * em, backgroundColor: '#F0F5F7', marginTop: 25 * em, marginBottom: 25 * hm },
  switchContainer: { marginLeft: 30 * em, marginRight: 30 * em },
  textSwitch: { fontFamily: 'Lato-Bold', marginRight: 40 * em, color: '#1E2D60', lineHeight: 21 * em },
  txtSwitchBox: { justifyContent: 'center' },
  switch: { marginTop: 5 * hm },
};

export default FriendsFilterScreen;
