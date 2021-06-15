import React from 'react';
import { em, hm } from 'view/common/const';
import { TouchableOpacity, View } from 'react-native';
import CommonText from 'view/components/text/CommonText';

const CommonButton = (props) => {
  return (
    <TouchableOpacity disabled={props.disabled} onPress={props.onPress} style={[styles.buttonStyle, props.style]}>
      {props.leftIcon && <View style={[styles.iconStyle, props.iconStyle]}>{props.leftIcon}</View>}
      <CommonText text={props.text} style={[styles.textStyle, props.textStyle]} color={props.color} />
      {props.rightIcon && (
        <TouchableOpacity onPress={props.onRightPress} style={[styles.iconStyle, props.iconStyle]}>{props.rightIcon}</TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: '#40CDDE',
    paddingVertical: 20 * hm,
    width: 315 * em,
    borderRadius: 20 * em,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: { textAlign: 'center', color: '#FFFFFF', fontFamily: 'Lato-Bold', lineHeight: 19 * em },
};

export default CommonButton;
