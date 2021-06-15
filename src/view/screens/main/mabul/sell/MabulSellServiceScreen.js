import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, HEIGHT, WIDTH, hm } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/adapter/MabulCommonListItem';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import {
  AnimalSell,
  BeautyCareSell,
  GardeningSell,
  HouseWorkSell,
  IroningSell,
  SchoolSupportSell,
  SupportChildrenSell,
  ChildCareSell,
  TransportSell,
  ComputerSell,
  AdministrativeSell,
  HelpOlderSell,
} from 'assets/svg/icons';

import DemandType from 'model/demand/DemandType';
import { mabulIcons } from 'view/common/icons';
const iconSize = { width: 38 * em, height: 38 * em };
const giveItems = [
  { id: 0, itemName: 'Garde d’enfants/ Baby Sitting', icon: ChildCareSell(iconSize) },
  { id: 1, itemName: 'Soutien scolaire/ cours', icon: SchoolSupportSell(iconSize) },
  {
    id: 2,
    itemName: 'Accompagnement des enfants',
    icon: SupportChildrenSell(iconSize),
  },
  {
    id: 21,
    itemName: 'Aide aux personnes âgées',
    comment: '(promenades, transports, actes de la vie courante)',
    icon: HelpOlderSell(iconSize),
  },
  { id: 3, itemName: 'Animaux de compagnie', comment: 'Soins et promenades', icon: AnimalSell(iconSize) },
  { id: 4, itemName: 'Informatique/ Internet', icon: ComputerSell(iconSize) },
  { id: 5, itemName: 'Administrative', icon: AdministrativeSell(iconSize) },
  { id: 6, itemName: 'Entretien de la maison/ travaux ménagers', icon: HouseWorkSell(iconSize) },
  { id: 7, itemName: 'Jardinage/ élagage', icon: GardeningSell(iconSize) },
  { id: 8, itemName: 'Repassage', icon: IroningSell(iconSize) },
  { id: 9, itemName: 'Transport/ Co-voiturage', icon: TransportSell(iconSize) },
  { id: 20, itemName: 'Soins d’esthétique à domicile', icon: BeautyCareSell(iconSize) },
];
const MabulSellServiceScreen = (props) => {
  const mabulSettings = mabulIcons.find((item) => item.type === DemandType.SELL);

  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      subText={item.comment}
      icon={item.icon}
      onPress={() => Actions.mabulCommonRequestDetail({ mabulSettings: mabulSettings, process: 67 })}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader
        style={styles.header}
        percent={props.process}
        isNoBackBtn={true}
        progressBarColor={'#AA87E5'}
      />
      <View style={styles.body}>
        <TitleText text={'Je vends\nService'} style={styles.title} />
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
  header: { height: 81 * hm },
  popView: {
    paddingLeft: 30 * em,
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  body: { flex: 1, alignItems: 'flex-start', backgroundColor: '#F0F5F7' },
  title: { lineHeight: 38 * em, paddingLeft: 30 * em, marginVertical: 35 * em, textAlign: 'left' },
  listItem: { width: 345 * em, marginTop: 25 * hm },
};

export default MabulSellServiceScreen;
