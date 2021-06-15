import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hexToRGB, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import CommentText from 'view/components/text/CommentText';
import CommonButton from 'view/components/button/CommonButton';
import CommonBackButton from 'view/components/button/CommonBackButton';
import SeeMore from 'react-native-see-more-inline';
import { Actions } from 'react-native-router-flux';
import AvatarWithBadge from 'view/components/view/AvatarWithBadge';
import FriendInvitePopupScreen from 'view/screens/main/friends/popup/FriendInvitePopupScreen';
import { getUserBadge } from 'view/common/icons';
import CommonListItem from 'view/components/adapter/CommonListItem';
import NeedStatusType from 'model/demand/NeedStatusType';
import Message from 'model/message/Message';
import DemandType from 'model/demand/DemandType';

const MabulDetailView = (props) => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [data] = useState(props.data);
  const userBadge = getUserBadge(data.type, data.subType);
  const colorStyles = { button: { color: '#41D0E2' }, label: { color: '#A0AEB8' } };
  const InviteButton = (
    <CommonButton
      style={styles.inviteBtn}
      text="Inviter à participer"
      textStyle={colorStyles.button}
      onPress={() => setInvitePopupVisible(true)}
    />
  );
  const ModifyButton = (
    <CommonButton
      style={styles.quizBtn}
      textStyle={colorStyles.button}
      text="Modifier"
      onPress={() => Actions.editNeed()}
    />
  );
  const AskButton = (
    <CommonButton
      onPress={() => Actions.activityMessage({ message: new Message(data.user, data.title, data.coverImage) })}
      style={styles.quizBtn}
      textStyle={{ color: '#41D0E2' }}
      text="Poser une question"
    />
  );
  const onPress = () => Actions.main({ tabNav: 'Friends' });

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Image
          source={
            data.type === DemandType.ORGANIZE ? require('assets/images/photo.png') : require('assets/images/repair.png')
          }
          style={styles.cover}
        />
        <View style={styles.body}>
          <CommonText
            text={data.status === NeedStatusType.CANCELED ? 'Terminé' : '04 Fév · 08h00'}
            style={styles.timeTxt}
            color="#6A8596"
          />
          <CommonListItem
            style={styles.userInfo}
            icon={
              <AvatarWithBadge
                style={{ marginRight: 21 * em }}
                avatar={data.user.photo}
                badge={userBadge}
                avatarDiameter={35 * em}
                badgeDiameter={21 * em}
              />
            }
            title={data.user.name}
            titleStyle={styles.userName}
            subTitle={data.relationship}
            subTitleStyle={colorStyles.label}
          />
          <CommentText style={styles.comment} text={data.organName} color={'#1E2D60'} />
          <TitleText text={data.title} style={styles.title} />
          <SeeMore
            numberOfLines={4}
            seeLessText="Voir moins"
            seeMoreText="Continuer à lire"
            style={styles.content}
            linkColor="#40CDDE">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, ssed diam voluptua. At vero eos dsfsdfwefwef
          </SeeMore>
          {data.status === NeedStatusType.CANCELED ? <></> : data.relationship ? AskButton : ModifyButton}
          {data.status !== NeedStatusType.CANCELED && InviteButton}
        </View>
      </ScrollView>
      <CommonBackButton dark style={styles.backBtnView} onPress={props.onBackPress || onPress} />
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
    </>
  );
};

const styles = {
  backBtnView: {
    shadowColor: '#B3C6CF33',
    shadowOffset: {
      width: 0,
      height: 20 * em,
    },
    shadowOpacity: 1,
    shadowRadius: 40 * em,
    elevation: 3,
    backgroundColor: '#ffffff',
    position: 'absolute',
    left: 15 * em,
    top: 27 * em,
  },
  cover: {
    width: '100%',
    height: 312 * hm,
  },
  body: {
    paddingHorizontal: 30 * em,
    marginTop: -41 * em,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
    paddingBottom: 50 * hm,
  },
  timeTxt: {
    fontFamily: 'Lato-Bold',
    lineHeight: 19 * hm,
    paddingHorizontal: 30 * em,
    marginLeft: -30 * em,
    paddingTop: 11 * em,
    paddingBottom: 11 * em,
    marginTop: -17 * hm,
    backgroundColor: '#ffffff',
    alignSelf: 'baseline',
    borderTopRightRadius: 15 * em,
    borderBottomRightRadius: 15 * em,
  },
  userInfo: {
    marginTop: 14 * em,
    height: 39 * em,
  },
  userName: { fontFamily: 'Lato-Bold', textAlign: 'left', textAlignVertical: 'center', color: '#1E2D60' },
  comment: { lineHeight: 15 * em, fontSize: 13 * em, textAlign: 'left', marginTop: 21 * hm },
  title: {
    lineHeight: 30 * em,
    fontSize: 24 * em,
    textAlign: 'left',
    marginTop: 5 * hm,
    fontFamily: 'Lato-Black',
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  content: {
    fontSize: 16 * em,
    // backgroundColor: 'red',
    color: '#6A8596',
    lineHeight: 25 * em,
    textAlign: 'left',
    marginTop: 3 * hm,
    fontFamily: 'Lato-Regular',
  },
  quizBtn: { marginTop: 25 * hm, backgroundColor: hexToRGB('#41D0E2', 0.2) },
  inviteBtn: { marginTop: 15 * hm, backgroundColor: 'transparent' },
};

export default MabulDetailView;
