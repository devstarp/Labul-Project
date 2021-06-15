import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';

const CommentText = (props) => {
  let color = '#6A8596';
  if (props.color) {
    color = props.color;
  }
  let textAlignProp = 'center';
  if (props.align) {
    textAlignProp = props.align;
  }
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Text
          style={[
            { fontFamily: 'Lato-Regular', fontSize: 14 * em, color: color, textAlign: textAlignProp },
            props.style,
          ]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <Text
      style={[{ fontFamily: 'Lato-Regular', fontSize: 14 * em, color: color, textAlign: textAlignProp }, props.style]}>
      {props.text}
    </Text>
  );
};

export default CommentText;
