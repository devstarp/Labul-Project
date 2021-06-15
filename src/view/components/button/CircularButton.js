import React from 'react';
import { Text, View, Image } from 'react-native';
import { em } from 'view/common/const';
import { TouchableOpacity } from 'react-native';
import { MabulGive, MabulNeed, MabulSell, MabulOrganize } from 'assets/svg/icons';
import SmallText from 'view/components/text/SmallText';
const CircularButton = (props) => {
  let imageTag = MabulOrganize(styles.buttonImage);
  let text = "J'organisé";
  if (props.type === 'sell') {
    imageTag = MabulSell(styles.buttonImage);
    text = 'Je vends';
  } else if (props.type === 'need') {
    imageTag = MabulNeed(styles.buttonImage);
    text = "J'ai besoin";
  } else if (props.type === 'give') {
    imageTag = MabulGive(styles.buttonImage);
    text = 'Je donne';
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        {imageTag}
        <SmallText style={styles.buttonText} text={text} />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 65 * em },
  buttonText: { fontSize: 13 * em, color: '#FFFFFF', marginTop: 4 * em, overflow: 'hidden' },
  buttonImage: { width: 50 * em, height: 50 * em },
};

export default CircularButton;
