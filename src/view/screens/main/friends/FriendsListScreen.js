import React from 'react';
import { View, FlatList } from 'react-native';
import { em, hm } from 'view/common/const';
import FriendListCard from 'view/components/adapter/FriendListCard';
import DemandType from 'model/demand/DemandType';
import { Actions } from 'react-native-router-flux';
import { Demands } from 'view/common/services';

const FriendsListScreen = () => {
  const renderFlatList = ({ item, index }) => (
    <FriendListCard
      key={(Date.now() + parseInt(Math.random() * 100000000)).toString()}
      style={[styles.card, { marginBottom: index === Demands.length - 1 ? 120 * hm : 15 * hm }]}
      data={item}
      onPress={() => {
        if (item.type === DemandType.ORGANIZE) {
          Actions.friendOrganize({ detail: item });
        } else {
          if (item.type !== DemandType.SELL) {
            Actions.friendNeed({ detail: item });
          } else {
            Actions.friendSell({ detail: item });
          }
        }
      }}
      onAvatarPress={() => Actions.userProfile()}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={Demands}
        renderItem={renderFlatList}
        keyExtractor={(i) => i.id}
        style={{ paddingTop: 35 * hm, paddingBottom: 100 * hm }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F5F7',
    paddingTop: 128 * hm,
  },
  card: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    alignSelf: 'center',
    borderRadius: 10 * em,
    marginBottom: 15 * hm,
  },
};

export default FriendsListScreen;
