import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import SearchBox from 'view/components/other/SearchBox';
import SearchCommonListItem from 'view/components/adapter/SearchCommonListItem';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import CommonButton from 'view/components/button/CommonButton';
import { AlertWhite } from 'assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import { users } from 'view/common/users';
const usersList = [{ id: 0.1, name: 'Tous' }, ...users];
const AlertShareScreen = (props) => {
  const conceptColor = '#F9547B';
  const [searchedUsers, getSearchedUsers] = useState();
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem text={item.name} icon={item.photo} style={styles.listItem} option />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'Partager avec'} style={styles.title} />
        <SearchBox style={styles.searchBox} comment="Rechercher un contact" onChangeText={(t) => {}} />
        <FlatList
          data={usersList}
          renderItem={renderFlatList}
          keyExtractor={(i) => i.id}
          style={{ marginTop: 25 * em }}
        />
        <CommonButton
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="J’alerte"
          textStyle={{ marginLeft: 12.52 * em }}
          leftIcon={<AlertWhite width={27.21 * em} height={22.03 * em} />}
          onPress={() => Actions.myAlert()}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10.3%',
  },
  body: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  commonHeader: { marginTop: 27 * hm },
  title: {
    textAlign: 'left',
    marginTop: 35 * hm,
    lineHeight: 38 * em,
  },
  searchBox: { marginTop: 35 * hm, height: 52 * em },
  location: {
    alignSelf: 'center',
    marginTop: 15 * hm,
    alignItems: 'center',
    flexDirection: 'row',
  },

  listItem: { marginTop: 35 * hm },
  btn: {
    width: 315 * em,
    alignSelf: 'center',
    marginBottom: 30 * hm,
  },
};

export default AlertShareScreen;
