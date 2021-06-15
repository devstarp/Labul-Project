import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import CommentText from 'view/components/text/CommentText';
import { Actions } from 'react-native-router-flux';
import AvatarWithBadge from 'view/components/view/AvatarWithBadge';
import CommonListItem from 'view/components/adapter/CommonListItem';
import Message from 'model/message/Message';
import { InvitationEmptyView } from 'assets/svg/icons';
import { invitationsList } from 'view/common/services';
const invitationMessages = [
  new Message(
    invitationsList[1].user,
    invitationsList[1],
    'Salut ! Je t’invite à participer à Nettoyage de ma voiture.',
    false,
    '21:59'
  ),
  new Message(
    invitationsList[0].user,
    invitationsList[0],
    'Salut ! Je t’invite à participer à Réparer une chaise',
    true,
    'Lun'
  ),
];

const ActivityInviationsTabScreen = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const emptyView = (
    <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(false)}>
      <InvitationEmptyView width={96 * em} height={50 * em} />
      <CommonText text={'Tu n’as pas d’invitations'} color={'#6A8596'} style={styles.msgTxt} />
      <CommentText
        text={'Ne t’inquiètes pas, quelqu’un de tes cercles t’invitera bientôt. Regarde les demandes autour de toi'}
        color={'#6A8596'}
        style={styles.explainTxt}
      />
    </TouchableOpacity>
  );
  const renderFlatList = ({ item }) => (
    <CommonListItem
      title={item.user.name}
      titleStyle={styles.listItemUserName}
      subTitle={item.lastText}
      subTitleStyle={styles.listItemComment}
      // comment={item.lastText}
      // commentStyle={[styles.listItemLastText, { color: item.checked ? '#6A8596' : '#40CDDE' }]}
      icon={
        <AvatarWithBadge
          avatar={item.user.photo}
          badge={item.badge}
          avatarDiameter={40 * em}
          badgeDiameter={22 * em}
          style={{ marginRight: 6 * em }}
        />
      }
      style={styles.listItem}
      rightView={
        item.checked ? (
          <CommentText text={item.date} style={styles.listItemDate} />
        ) : (
          <View>
            <CommentText text={item.date} style={styles.listItemDate} />
            {/* <Image source={require('assets/images/ic_circle_pink.png')} style={{display:'none'}} /> */}
          </View>
        )
      }
      onPress={() => Actions.activityMessage({ activityType: 'invitation', message: item })}
    />
  );
  const listView = <FlatList data={invitationMessages} renderItem={renderFlatList} keyExtractor={(i) => i.id} />;
  return (
    <View style={styles.container}>
      <View style={styles.view}>{isEmpty ? emptyView : listView}</View>
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'flex-start', backgroundColor: '#F0F5F7', paddingTop: 10 * hm },
  view: { flex: 1, backgroundColor: '#ffff', width: '100%', paddingTop: 25 * hm, paddingHorizontal: 30 * em },
  alertIcon: { display: 'none', width: 1 * em, height: 1 * em, resizeMode: 'contain' },
  emptyView: {
    marginTop: 74 * em,
    width: 315 * em,
    alignSelf: 'center',
    alignItems: 'center',
  },
  msgIcon: {
    width: 37 * em,
    height: 37 * em,
    backgroundColor: '#A0AEB8',
    opacity: 0.4,
    marginTop: 13.15 * em,
    alignSelf: 'center',
    borderRadius: 19.5 * em,
  },
  msgTxt: { fontFamily: 'Lato-Black', marginTop: 15 * hm, textAlign: 'center', lineHeight: 23 * em },
  explainTxt: {
    marginTop: 10 * hm,
    lineHeight: 23 * em,
    width: 289 * em,
    textAlign: 'center',
    alignSelf: 'center',
  },
  listItem: {
    marginBottom: 35 * hm,
    width: 315 * em,
  },
  listItemUserName: { color: '#1E2D60', lineHeight: 21 * em, fontFamily: 'Lato-Black' },
  listItemComment: { color: '#A0AEB8', lineHeight: 18 * em, width: 260 * em },
  listItemDate: { color: '#A0AEB8', fontSize: 13 * em, textAlign: 'right' },
  listItemLastText: { marginTop: 6 * hm, marginLeft: 55 * em, textAlign: 'left' },
};

export default ActivityInviationsTabScreen;
