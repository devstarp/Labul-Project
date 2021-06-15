import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { em, WIDTH, hm } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';
import SmallText from 'view/components/text/SmallText';
import DemandType from 'model/demand/DemandType';
import { getUserBadge } from 'view/common/icons';
import CommonListItem from 'view/components/adapter/CommonListItem';
import AvatarWithBadge from 'view/components/view/AvatarWithBadge';
import { CrossGray, LocationRed } from 'assets/svg/icons';
const padding = 15 * em;
const textBoxMargin = 55 * em;

const FriendListCard = (props) => {
  const { data } = props;
  const userBadge = getUserBadge(data.type, data.subType);
  if (data.type === DemandType.SELL) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.container, props.style]}>
          <View style={styles.containerIcon}>
            <CrossGray width={12 * em} height={12 * em} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={data.coverImage} style={styles.coverImage} />
          </View>
          {/* {data.date && (
            <SmallText
              style={styles.dateTextCommon}
              text={data.type === DemandType.ORGANIZE ? '01 Mar · 13h00' : '04 Fév · 08h00'}
              color="#6A8596"
            />
          )} */}
          <Image source={userBadge} style={styles.sellBadge} />
          <CommentText text={data.title} color="#1E2D60" style={{ fontFamily: 'Lato-Black' }} />
          <SmallText style={[styles.userDescText, { marginTop: 15 * hm }]} text={data.slogan} />
          <CommentText
            align="left"
            text={data.comment}
            color="#1E2D60"
            style={{ fontFamily: 'Lato-Black', marginTop: 5 * hm }}
          />
          <View style={{ flexDirection: 'row', marginTop: 17 * hm }}>
            <CommentText align="left" text={data.price} color="#1E2D60" />
            <CommentText align="left" text={data.discountPrice} color="#6A8596" style={styles.discountPrice} />
            <CommentText align="left" text={data.discountInfo} color="#6A8596" style={{ marginLeft: 10 * em }} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <View style={styles.containerIcon}>
          <CrossGray width={12 * em} height={12 * em} />
        </View>
        {typeof data.coverImage === 'number' ? (
          <Image source={data.coverImage} style={styles.coverImage} />
        ) : (
          data.coverImage
        )}
        <View style={styles.textBox}>
          {data.date && (
            <View style={styles.dateText}>
              <SmallText text={data.date} color="#6A8596" />
            </View>
          )}
          <CommonListItem
            style={styles.bottomContent}
            icon={
              <AvatarWithBadge
                avatar={data.user.photo}
                badge={userBadge}
                avatarDiameter={36 * em}
                badgeDiameter={21 * em}
                style={{ marginRight: 10 * em }}
                onPress={() => props.onAvatarPress()}
              />
            }
            title={data.user.name}
            titleStyle={[styles.userDescText, { fontFamily: 'Lato-Bold' }]}
            subTitle={data.organName}
            subTitleStyle={styles.userDescText}
          />
          {data.type === DemandType.GIVE && (
            <CommonListItem
              style={styles.locationContainer}
              icon={<LocationRed width={16 * em} height={19 * em} />}
              titleStyle={styles.locationText}
              title={data.location}
            />
          )}
          {data.type !== DemandType.GIVE && (
            <CommentText align="left" color="#1E2D60" style={styles.organText} text={data.title} />
          )}
          {data.price && <CommentText align="left" color="#1E2D60" style={styles.priceText} text={data.price} />}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20 * hm,
    width: 315 * em,
    paddingHorizontal: padding,
    minHeight: 36 * hm,
    elevation: 3,
    shadowColor: '#254D5612',
    shadowOffset: {
      width: 0,
      height: 12 * hm,
    },
    shadowRadius: 25 * em,
    paddingTop: 15 * hm,
    paddingBottom: 35 * hm,
  },
  sellBadge: {
    alignSelf: 'center',
    width: 64 * em,
    height: 64 * em,
    borderRadius: 32 * em,
    marginTop: -32 * em,
    marginBottom: 5 * hm,
  },
  containerIcon: { flexDirection: 'row-reverse' },
  coverImage: {
    alignSelf: 'center',
    marginTop: 15 * hm,
    width: '100%',
    height: 115 * em,
    borderRadius: padding,
  },
  textBox: { flex: 1 },
  dateText: {
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    paddingRight: padding,
    paddingVertical: 5 * hm,
    marginTop: -12.5 * hm,
    borderTopRightRadius: 14 * hm,
  },
  bottomContent: { marginTop: padding, width: '100%' },
  userDesc: { flex: 1, justifyContent: 'space-between' },
  userDescText: { fontSize: 12 * em, color: '#1E2D60' },
  organText: { marginLeft: textBoxMargin, marginTop: 15 * hm, fontFamily: 'Lato-Bold' },
  priceText: { marginLeft: textBoxMargin, marginTop: 10 * hm, fontFamily: 'Lato-Bold' },
  locationContainer: { marginLeft: textBoxMargin, marginTop: 8 * hm },
  locationText: { color: '#6A8596', fontSize: 12 * em, marginRight: 75 * em, marginLeft: 10 * em, lineHeight: 14 * em },
  dateTextCommon: { paddingVertical: 10 * hm, paddingHorizontal: padding },
  discountPrice: { marginLeft: 10 * em, textDecorationLine: 'line-through', textDecorationStyle: 'solid' },
};
export default FriendListCard;
