import React from 'react';
import { View, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonButton from 'view/components/button/CommonButton';
import TitleText from 'view/components/text/TitleText';
import CommonText from 'view/components/text/CommonText';
import { Actions } from 'react-native-router-flux';
import SocialButton from 'view/components/button/SocialButton';
import PopupHeader from 'view/components/header/PopupHeader';
import { Person } from 'assets/svg/icons';

const LoginMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.behindImage} source={require('assets/images/img_sample_profiles.png')} />
      <View style={styles.popupView}>
        <PopupHeader icon={<Person width={20 * em} height={25 * em} />} />
        <TitleText text="Je me connecte" style={styles.buttonMargin} />
        <CommonText text="Ravis de te revoir :)" />
        <View style={styles.buttonGroup}>
          <CommonButton
            text="Je me connecte avec mon email"
            style={styles.commonButtonMargin}
            onPress={() => {
              Actions.login();
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
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fafaff',
  },
  buttonMargin: { marginTop: 16 * hm, marginBottom: 7 * hm },
  behindImage: { width: 616 * hm, height: 387 * hm, marginLeft: 160.5 * hm, marginTop: -37 * hm },
  popupView: {
    height: 420 * hm,
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopStartRadius: 28 * em,
    borderTopEndRadius: 28 * em,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  commonButtonMargin: { marginTop: 10 * hm },
  buttonGroup: { flex: 1, flexDirection: 'column-reverse', marginBottom: 30 * hm, marginTop: 45 * hm },
};

export default LoginMenuScreen;
