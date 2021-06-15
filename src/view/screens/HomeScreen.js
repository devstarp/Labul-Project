import React from 'react';
import { View, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonButton from 'view/components/button/CommonButton';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';
import { Actions } from 'react-native-router-flux';
import {AccountBackground} from 'assets/svg/icons'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.registerWrapper}>
        <CommonText text="Je n'ai pas de compte ? " />
        <CommonText
          text="Je m'inscris"
          color="#40CDDE"
          onPress={() => {
            Actions.signupMenu();
          }}
          style={{ fontFamily: 'Lato-Bold' }}
        />
      </View>
      <CommonButton
        text="Je me connecte"
        style={styles.wideMargin}
        onPress={() => {
          Actions.loginMenu();
        }}
      />
      <CommonText text="ma famille" textAlign="center" />
      <CommonText text="Je vis avec mon voisinage, mes amis," textAlign="center" />
      <TitleText text="Bienvenue" style={styles.narrowMargin} />
      <Image style={styles.topImage} source={require('assets/images/img_sample_profiles.png')} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 16 * hm,
  },
  registerWrapper: { flexDirection: 'row', alignItems: 'center', paddingVertical: 36 * hm },
  wideMargin: { marginTop: 24 * hm },
  narrowMargin: { marginBottom: 6 * hm },
  topImage: { flex: 1, marginBottom: 18 * hm },
};

export default HomeScreen;
