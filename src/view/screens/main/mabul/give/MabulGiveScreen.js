import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/adapter/MabulCommonListItem';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { Aliments, Education, HighTech, Mebule, ObjetDrivers, Repas, Vetements } from 'assets/svg/icons';
import DemandType from 'model/demand/DemandType';
import { mabulIcons } from 'view/common/icons';

const iconSize = { width: 38 * em, height: 38 * em };
const giveItems = [
  { id: 0, itemName: 'Objet divers', icon: ObjetDrivers(iconSize) },
  { id: 1, itemName: 'Meuble', icon: Mebule(iconSize) },
  { id: 2, itemName: 'High Tech', icon: HighTech(iconSize) },
  { id: 3, itemName: 'Education', icon: Education(iconSize) },
  { id: 4, itemName: 'Vêtements', icon: Vetements(iconSize) },
  { id: 5, itemName: 'Repas', icon: Repas(iconSize) },
  { id: 6, itemName: 'Aliments', icon: Aliments(iconSize) },
];
const MabulGiveScreen = ({ process }) => {
  const mabulSettings = mabulIcons.find((item) => item.type === DemandType.GIVE);

  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      icon={item.icon}
      onPress={() =>
        Actions.mabulCommonRequestDetail({
          mabulSettings: mabulSettings,
          process: mabulSettings.type === DemandType.GIVE ? 84 : 50,
        })
      }
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={process} noBackButton progressBarColor={'#34D9B8'} />
      <View style={styles.body}>
        <TitleText text={'Je donne'} style={styles.title} />
        <View style={styles.popView}>
          <FlatList data={giveItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 16 * em,
  },
  header: {
    height: '10.3%',
  },
  popView: {
    paddingLeft: WIDTH * 0.08,
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    backgroundColor: '#ffffff',
    paddingBottom: 163 * em,
  },
  body: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F0F5F7',
  },
  title: {
    paddingLeft: WIDTH * 0.08,
    marginTop: 35 * em,
    marginBottom: 73 * hm,
  },
  listItem: { width: 345 * em, marginTop: 25 * hm },
};

export default MabulGiveScreen;
