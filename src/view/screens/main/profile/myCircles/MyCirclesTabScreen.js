import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { em, hm } from 'view/common/const';
import CirclesCommonListItem from 'view/components/adapter/CirclesCommonListItem';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
import UserType from 'model/user/UserType';
import UserOptionPopupScreen from './UserOptionPopupScreen';
import GroupOptionPopupScreen from './GroupOptionPopupScreen';
import { AddFamily, AddFriend, AddNeighbor } from 'assets/svg/icons';
import User from 'model/user/User';
import RelationshipType from 'model/user/RelationshipType';
import Group from 'model/user/Group';

const myContacts = [
  new User(
    'Amandine Bernard',
    require('assets/images/avatars/amandine-bernard-116x116.png'),
    [RelationshipType.FRIEND, RelationshipType.FAMILIY],
    [1]
  ),
  new User('Robert Richard', require('assets/images/avatars/antoine-durand-116x116.png'), [RelationshipType.FAMILIY]),
  new User('Antoine Durand', require('assets/images/avatars/antoine-durand-116x116.png'), [RelationshipType.NEIGHBOR]),
  new User(
    'Amélie Petit',
    require('assets/images/avatars/amelie-petit-116x116.png'),
    [RelationshipType.NEIGHBOR, RelationshipType.FAMILIY, RelationshipType.FRIEND],
    [3]
  ),
  new User(
    'Mathieu Thomas',
    require('assets/images/avatars/mathieu-thomas-116x116.png'),
    [RelationshipType.FRIEND, RelationshipType.FAMILIY],
    [1, 2]
  ),
  new User('Michel Roux', require('assets/images/avatars/michel-roux-116x116.png'), [RelationshipType.FAMILIY], [0, 1]),
  new User(
    'Florine Girard',
    require('assets/images/avatars/florine-girard-116x116.png'),
    [RelationshipType.FRIEND, RelationshipType.FAMILIY],
    [0, 2]
  ),
  new User(
    'David Bonnet',
    require('assets/images/avatars/david-bonnet-116x116.png'),
    [RelationshipType.NEIGHBOR, RelationshipType.FAMILIY],
    [1]
  ),
  new User(
    'Zoé Joly',
    require('assets/images/avatars/zoe-joly-116x116.png'),
    [RelationshipType.FRIEND, RelationshipType.FAMILIY],
    [1, 2]
  ),
  new User(
    'Chloé Robert',
    require('assets/images/avatars/chloe-robert-116x116.png'),
    [RelationshipType.FAMILIY],
    [0, 1]
  ),
  new User(
    'Marine Lucas',
    require('assets/images/avatars/marine-lucas-116x116.png'),
    [RelationshipType.FRIEND, RelationshipType.FAMILIY],
    [2]
  ),
  new User(
    'Philippe Arnaud',
    require('assets/images/avatars/philippe-arnaud-116x116.png'),
    [RelationshipType.NEIGHBOR],
    [3]
  ),
  new User('Sarah Berger', require('assets/images/avatars/sarah-berger-116x116.png'), [RelationshipType.NEIGHBOR], [3]),
];
const myGroups = [
  new Group(UserType.GROUP, 'Sport', RelationshipType.NEIGHBOR, 3, 3),
  new Group(UserType.GROUP, 'Cousins', RelationshipType.FAMILIY, 0, 8),
  new Group(UserType.GROUP, 'Repas de Dimanche', RelationshipType.FAMILIY, 1, 7),
  new Group(UserType.GROUP, 'Aide aux travaux de Robert', RelationshipType.FRIEND, 2, 5),
];
export { myContacts };

const addIconSize = { width: 59 * em, height: 59 * em };
const themeButtons = [
  { id: RelationshipType.FAMILIY, icon: AddFamily(addIconSize), color: '#EF88B9' },
  { id: RelationshipType.FRIEND, icon: AddFriend(addIconSize), color: '#6784DA' },
  { id: RelationshipType.NEIGHBOR, icon: AddNeighbor(addIconSize), color: '#40CDDE' },
];
const MyCirclesTabScreen = (props) => {
  const sort = props.route.params.sort;
  const [groupOptionVisible, setGroupOptionVisible] = useState();
  const [userOptionVisible, setUserOptionVisible] = useState(null);
  const themeBtn = themeButtons.find((item) => item.id === sort);
  const renderFlatList = ({ item }) => {
    if (item.relationship === sort) {
      if (item.type === UserType.GROUP) {
        console.log(item.number);
        return (
          <CirclesCommonListItem
            sort={item.relationship}
            type={item.type}
            name={item.name}
            subName={item.number}
            style={styles.listItem}
            onLeftPress={() => {
              Actions.groupDetail({ data: item });
            }}
            onRightPress={() => setGroupOptionVisible(item)}
          />
        );
      }
    }
    if (item.relationship.includes(sort)) {
      const group = myGroups.filter((g) => g.relationship === sort).map((g) => g.id);
      const hasGroup = item.groupID ? !group.every((id) => !item.groupID.includes(id)) : undefined;
      if (!hasGroup) {
        return (
          <CirclesCommonListItem
            name={item.name}
            subName={item.relationship.join('/')}
            icon={item.photo}
            style={styles.listItem}
            onPress={() => setUserOptionVisible(item)}
          />
        );
      } else {
        return <></>;
      }
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={myGroups.concat(myContacts)}
        renderItem={renderFlatList}
        style={{
          backgroundColor: '#ffffff',
          flex: 1,
          width: '100%',
          paddingTop: 25 * em,
          paddingHorizontal: 30 * em,
          // backgroundColor: '#ffffff',
        }}
        keyExtractor={(i) => i.id}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30 * em,
          right: 30 * em,
          shadowColor: '#254D56',
          shadowOffset: {
            width: 0,
            height: 12 * em,
          },
          shadowOpacity: 0.16,
          shadowRadius: 25 * em,
          elevation: 3 * em,
        }}
        onPress={() => Actions.createGroup({ themeColor: themeBtn.color, sort: sort })}>
        {themeBtn.icon}
      </TouchableOpacity>
      <UserOptionPopupScreen data={userOptionVisible} onPress={() => setUserOptionVisible(null)} />
      <GroupOptionPopupScreen data={groupOptionVisible} onPress={() => setGroupOptionVisible(null)} />
    </View>
  );
};
export default MyCirclesTabScreen;
const styles = {
  container: { flex: 1, backgroundColor: '#F0F5F7', paddingTop: 10 * hm },
  listItem: {
    height: 42 * hm,
    marginBottom: 35 * hm,

    width: 315 * em,
  },
  icon: { width: 25 * em, height: 18 * em, tintColor: '#ffffff' },
};
