import React from 'react';
import { View, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonButton from 'view/components/button/CommonButton';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';
import { Actions } from 'react-native-router-flux';
import CommentText from 'view/components/text/CommentText';

const ActivateLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.behindImage} source={require('assets/images/bg_active_location.png')} />
      <View style={styles.popupView}>
        <TitleText text="Activer ma localisation" style={{ marginTop: 24 * hm }} />
        <CommentText
          text="Labul a besoin de ta localisation pour te mettre en contact avec tes proches."
          style={{ marginTop: 12 * hm, paddingHorizontal: 29 * em }}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.fakeContainer} />
          <CommonButton
            text="Activer"
            onPress={() => {
              Actions.activateNotification();
            }}
          />
          <View style={styles.bottomButtonContainer}>
            <CommonText
              text="Activer plus tard"
              onPress={() => {
                Actions.activateNotification();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F5F7',
    width: 375 * em,
  },
  behindImage: { width: 369 * hm, height: 291 * hm, marginLeft: -71 * hm },
  popupView: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopStartRadius: 28 * em,
    borderTopEndRadius: 28 * em,
    marginTop: 10 * hm,
    width: '100%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12 * hm,
  },
  fakeContainer: { flex: 1 },
  bottomButtonContainer: { flex: 1, justifyContent: 'center' },
};

export default ActivateLocationScreen;
