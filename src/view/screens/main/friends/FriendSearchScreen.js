import React, { useState } from 'react';
import { View } from 'react-native';
import { em, hm } from 'view/common/const';
import SearchInput from 'view/components/other/SearchInput';
import { FlatList } from 'react-native-gesture-handler';
import SearchCommonListItem from 'view/components/adapter/SearchCommonListItem';
import FriendCommonHeader from 'view/components/header/FriendCommonHeader';
import { users } from 'view/common/users';

const FriendsSearchScreen = () => {
  const [searchedUsers, getSearchResult] = useState([]);
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem
      text={item.name}
      subText={item.relationship ? item.relationship.join('/') : undefined}
      icon={item.photo}
      style={styles.listItem}
    />
  );

  return (
    <View style={styles.container}>
      <FriendCommonHeader title="Rechercher" searchIn={searchedUsers.length === 0 ? false : true} />
      <SearchInput
        style={styles.searchbox}
        onChangeText={(text) => {
          if (text) {
            getSearchResult(users);
          } else {
            getSearchResult([]);
          }
        }}
      />
      <FlatList data={searchedUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  title: {
    marginLeft: 30 * em,
    marginBottom: 35 * hm,
  },
  searchbox: { marginTop: 25 * hm, height: 44 * hm, width: 315 * em, marginLeft: 30 * em, marginRight: 30 * em },
  listItem: {
    height: 42 * hm,
    marginTop: 35 * hm,
    paddingHorizontal: 30 * em,
    width: 315 * em,
  },
};

export default FriendsSearchScreen;
export { users };
