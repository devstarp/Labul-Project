import React from 'react';
import { View, Text } from 'react-native';
import { em } from 'view/common/const';
import TitleText from 'view/components/text/TitleText';
import SmallText from 'view/components/text/SmallText';

const PurchaseMenuCard = (props) => {
  var psStyle = {
    borderColor: '#ffffff',
    bgColor: '#BFCDDB',
  };
  if (props.selected) {
    psStyle.borderColor = props.name === 'Pro' ? '#7398FD' : '#41D0E2';
    psStyle.bgColor = props.name === 'Pro' ? '#7398FD' : '#41D0E2';
  }
  const shadow = {
    elevation: 2,
    shadowColor: '#A7A7A733',
    shadowOffset: {
      width: 0,
      height: 8 * em,
    },shadowOpacity:1,
    shadowRadius: 22 * em,
  };
  return (
    <View
      style={[
        styles.container,
        props.selected || props.noMore ? { elevation: 0 } : shadow,
        props.style,
        { borderColor: psStyle.borderColor },
      ]}>
      <View style={[
        styles.title,
        { backgroundColor: psStyle.bgColor, borderColor: props.noMore ? '#ffffff' : 'transparent' },
      ]}>
      <Text
        style={{  fontFamily: 'Lato-Bold',
        color: '#FFFFFF',
        fontSize: 18 * em,
          lineHeight: 22 * em,}}>
        {props.name}
      </Text></View>
      <TitleText text={props.price} style={styles.price} />
      <TitleText text={'par mois'} style={{ marginBottom: 17 * em, fontSize: 12 * em, lineHeight: 14 * em }} />
      <View style={[styles.containerTxt, { width: props.txtWidth }]}>
        <Text style={styles.comment}>{props.commentRadius}</Text>
        <Text style={[styles.comment, { color: '#6A8596' }]}>{props.comment}</Text>
      </View>
      {!props.noMore && (
        <SmallText
          style={[styles.addTxt, { bottom: props.name === 'Pro' ? 15 * em : 19 * em }]}
          color={props.name === 'Pro' ? '#7398FD' : '#41D0E2'}
          text="En savoir plus"
        />
      )}
    </View>
  );
};

const styles = {
  container: {
    paddingHorizontal: 15 * em,
    backgroundColor: '#ffffff',
    borderRadius: 18 * em,
    borderWidth: 3 * em,

    alignItems: 'center',
  },
  title: {

    borderRadius: 17 * em,


    paddingHorizontal: 18 * em,
    paddingVertical: 4 * em,

    marginTop: -15 * em,
    borderWidth: 1 * em,
    borderColor: 'transparent',
  },
  price: { marginTop: 25 * em, fontSize: 25 * em, lineHeight: 30 * em },
  containerTxt: { width: 120 * em, height: 30 * em },
  comment: { fontSize: 9 * em, lineHeight: 14 * em, textAlign: 'center', color: '#1E2D60', fontFamily: 'Lato-Regular' },
  addTxt: { position: 'absolute', fontSize: 12 * em, lineHeight: 14 * em },
};

export default PurchaseMenuCard;
