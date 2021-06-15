import React from 'react';
import { View } from 'react-native';
import { em, hm } from 'view/common/const';
import { FlatList } from 'react-native';
import ProfileCommonNeedCard from 'view/components/adapter/ProfileCommonNeedCard';
import { Actions } from 'react-native-router-flux';
import NeedDemand from 'model/demand/NeedDemand';
import NeedDemandType from 'model/demand/NeedDemandType';
import OrganizeDemand from 'model/demand/OrganizeDemand';
import User from 'model/user/User';
import OrganizeDemandType from 'model/demand/OrganizeDemandType';
import DemandType from 'model/demand/DemandType';
import NeedStatusType from 'model/demand/NeedStatusType';

const needsLists = [
  Object.assign(
    new NeedDemand(
      new User('Mathieu Torin', require('assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'J’ai besoin coup de main bricolage',
      'Récolter des figues',
      new Date(),
      require('assets/images/sample_cover_9.png'),
      3,
      NeedDemandType.REPAIR
    ),
    { status: NeedStatusType.INPROGRESS }
  ),
  Object.assign(
    new OrganizeDemand(
      new User('Mathieu Torin', require('assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'J’organise apéro',
      'Récolter des figues',
      new Date(),
      require('assets/images/sample_cover_10.png'),
      1,
      OrganizeDemandType.WORKSHOP
    ),
    { status: NeedStatusType.INPROGRESS }
  ),
  Object.assign(
    new NeedDemand(
      new User('Mathieu Torin', require('assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'Coup de main Entretien de la maison/ travaux ménagers',
      'Récolter des figues',
      new Date(),
      require('assets/images/sample_cover_11.png'),
      3,
      NeedDemandType.REPAIR
    ),
    { status: NeedStatusType.CANCELED }
  ),
];
const MyNeedsTabScreen = () => {
  //   const [isEmpty, setIsEmpty] = useState(true);
  //   const emptyView = (
  //     <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(!isEmpty)}>
  //       <CircleDraw
  //         radius={17.31 * em}
  //         color="#A0AEB8"
  //         style={{ opacity: 0.4, position: 'absolute', left: 103.85 * em }}
  //       />
  //       <CircleDraw
  //         radius={8.31 * em}
  //         color="#A0AEB8"
  //         style={{ opacity: 0.4, position: 'absolute', top: 17.31 * em, left: 190.35 * em }}
  //       />
  //       <Image style={styles.msgIcon} />
  //       <CommonText text={'Tu n’as pas de messages'} color={'#6A8596'} style={styles.msgTxt} />
  //       <CommentText
  //         text={'Parle que si tu participes dans une demande sur Labul, la messagerie est dédiée qu’au demandes'}
  //         color={'#6A8596'}
  //         style={styles.explainTxt}
  //       />
  //     </TouchableOpacity>
  //   );
  const renderFlatList = ({ item, index }) => (
    <ProfileCommonNeedCard
      data={item}
      style={[styles.listItem, { marginBottom: needsLists.length === index + 1 ? 50 * hm : 15 * hm }]}
      onPress={() => {
        if (item.type === DemandType.ORGANIZE) {
          Actions.myOrganize();
        } else {
          Actions.myNeed();
        }
      }}
    />
  );
  const listView = (
    <FlatList
      data={needsLists}
      renderItem={renderFlatList}
      keyExtractor={(i) => i.id}
      style={{ paddingTop: 25 * hm, paddingHorizontal: 30 * em, backgroundColor: '#ffffff' }}
    />
  );
  return <View style={styles.container}>{listView}</View>;
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F0F5F7',
    paddingTop: 10 * hm,
  },

  emptyView: { marginTop: 74 * hm, width: 315 * em, height: 148.15 * hm, alignSelf: 'center' },
  listItem: { marginBottom: 15 * hm, width: 315 * em },
};

export default MyNeedsTabScreen;
