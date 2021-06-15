import React from 'react';
import { View, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonButton from 'view/components/button/CommonButton';
import TitleText from 'view/components/text/TitleText';
import CommonText from 'view/components/text/CommonText';
import { Actions } from 'react-native-router-flux';
import SocialButton from 'view/components/button/SocialButton';
import PopupHeader from 'view/components/header/PopupHeader';
import { SignIn } from 'assets/svg/icons';
const SignupMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.behindImage} source={require('assets/images/img_sample_profiles.png')} />
      <View style={styles.popupView}>
        <PopupHeader icon={SignIn({ width: 20 * em, height: 20 * em })} />
        <TitleText text="Je m’inscris" style={styles.buttonMargin} />
        <CommonText text="Rentre dans Labul" />
        <View style={styles.buttonGroup}>
          <CommonButton
            text="Je m'inscris avec mon email"
            style={styles.commonButtonMargin}
            onPress={() => {
              Actions.registerEmail();
            }}
          />
          <SocialButton
            text="Je me connecte avec Facebook"
            type="facebook"
            style={styles.commonButtonMargin}
            onPress={() => {
              Actions.main();
            }}
          />
          <SocialButton
            text="Je me connecte avec Google"
            type="google"
            onPress={() => {
              Actions.main();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fafaff',
    resizeMode: 'contain',
  },
  buttonMargin: {
    marginTop: 16 * hm,
  },
  behindImage: { width: 616 * hm, height: 387 * hm, marginLeft: 160.5 * hm, marginTop: -37 * hm },
  popupView: {
    flex: 1,
    height: 420 * hm,
    backgroundColor: '#ffffff',
    borderTopStartRadius: 25 * em,
    borderTopEndRadius: 25 * em,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  commonButtonMargin: { marginTop: 12 * hm },
  buttonGroup: { flex: 1, flexDirection: 'column-reverse', marginBottom: 36 * hm, marginTop: 36 * hm },
};

export default SignupMenuScreen;
