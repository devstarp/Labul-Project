import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';
import ProfileCommonAvatar from 'view/components/view/ProfileCommonAvatar';
import CommentText from 'view/components/text/CommentText';
import CommonButton from 'view/components/button/CommonButton';
import FriendBadgeNoticePopupScreen from './popup/FriendBadgeNoticePopupScreen';
import { CheckBlue } from 'assets/svg/icons';
import { Actions } from 'react-native-router-flux';
import { feedbackIcons } from 'view/common/icons';
const BadgeCard = ({ icon, name }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <View style={styles.badgeCard}>
      <TouchableOpacity
        onPress={() => setClicked(!clicked)}
        style={[styles.circleContainer, clicked ? styles.circleContainerShadow : {}]}>
        {clicked ? <CheckBlue /> : icon}
      </TouchableOpacity>
      <CommentText text={name} style={{ width: 98 * em }} />
    </View>
  );
};

const FriendGiveBadgeScreen = () => {
  const [badgeNoticeVisible, setBadgeNoticeVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CommentText text="Annuler" color="#ffffff" onPress={() => Actions.pop()} />
      </View>
      <ScrollView>
        <View style={styles.firstPopView}>
          <ProfileCommonAvatar
            borderWidth={0}
            icon={require('assets/images/avatar.png')}
            style={styles.avatar}
            logoVisible={false}
          />
          <CommonText text={'Amandine Bernard'} style={styles.title} color="#1E2D60" />
          <TitleText text="Quel badge tu lui attribues ?" color="#1E2D60" style={styles.comment} />
          <CommentText text="3 maximum" color="#A0AEB8" style={styles.notice} />
          <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
            {feedbackIcons.map((feedback) => (
              <BadgeCard icon={feedback.icon} name={feedback.name} key={feedback.id} />
            ))}
          </View>
          <View />
        </View>
      </ScrollView>
      <View style={styles.btnBox}>
        <CommonButton text={'Continuer'} onPress={() => setBadgeNoticeVisible(true)} />
      </View>
      <FriendBadgeNoticePopupScreen
        visible={badgeNoticeVisible}
        selected={[feedbackIcons[0], feedbackIcons[1], feedbackIcons[2]]}
        onPress={() => setBadgeNoticeVisible(false)}
      />
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#40CDDE' },
  backBtn: { position: 'absolute', zIndex: 1, backgroundColor: '#ffffff', top: 27 * hm, left: 15 * em },
  scrollView: { backgroundColor: '#40CDDE' },
  badgeCard: { marginBottom: 35 * hm, alignItems: 'center' },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1 * em,
    borderColor: '#F0F5F7',
    backgroundColor: '#ffffff',
    width: 81 * em,
    height: 81 * em,
    borderRadius: 40.5 * em,
  },
  circleContainerShadow: {
    elevation: 1,
    shadowColor: '#A7A7A733',
    shadowOffset: { width: 0, height: 8 * hm },
    shadowOpacity: 1,
    shadowRadius: 20 * em,
  },
  header: { height: 82 * em, flexDirection: 'row-reverse', alignItems: 'center', paddingHorizontal: 29 * em },
  btnBox: { position: 'absolute', alignSelf: 'center', bottom: 23 * em, backgroundColor: 'transparent' },
  firstPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 20 * em,
    borderTopLeftRadius: 20 * em,
    marginTop: 47 * hm,
    flex: 1,
    paddingHorizontal: 30 * hm,
    paddingBottom: 80 * hm,
  },
  avatar: { marginTop: (-97 / 2) * hm, width: 97 * hm, height: 97 * hm },
  title: { marginTop: 10 * hm, marginBottom: 10 * hm, fontFamily: 'Lato-Bold' },
  comment: { fontSize: 22 * em, marginTop: 10 * hm, marginBottom: 5 * hm },
  notice: { marginTop: 5 * hm, marginBottom: 35 * hm },

  badgeIcon: {
    width: 60 * em,
    height: 60 * em,
    marginRight: 18 * em,
    backgroundColor: 'yellow',
  },
};

export default FriendGiveBadgeScreen;
