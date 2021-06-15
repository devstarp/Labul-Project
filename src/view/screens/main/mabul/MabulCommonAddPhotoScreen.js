import React from 'react';
import { View, Image } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, mabulColors } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';
import CommonText from 'view/components/text/CommonText';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from 'view/components/button/MabulNextButton';
import DemandType from 'model/demand/DemandType';

const MabulCommonAddPhotoScreen = ({ mabulSettings, process }) => {
  const conceptColor = mabulSettings.color;

  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Ajoute de photos'} style={styles.title} />
          <CommentText
            text="Les photos aident les utilisateurs à avoir une idée de ce que tu vends."
            style={styles.comment}
          />
          <View style={styles.photoZone}>
            {mabulSettings.addPhotoIcon}
            <CommonText text={'Clique ici'} colo={conceptColor} />
            <CommentText text="3 maximum" style={styles.commentPhoto} />
          </View>
        </View>
        <MabulNextButton
          color={conceptColor}
          style={styles.nextBtn}
          onPress={() =>
            Actions.mabulCommonDateSetting({
              mabulSettings: mabulSettings,
              process:
                mabulSettings.type === DemandType.NEED ? 67 : mabulSettings.type === DemandType.ORGANIZE ? 60 : 79,
            })
          }
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 16 * em,
  },
  header: {
    height: '10.3%',
  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, textAlignVertical: 'center', marginTop: 10 * em },
  photoZone: {
    width: 315 * em,
    height: 121 * em,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2 * em,
    borderColor: '#BFCDDB',
    borderRadius: 20 * em,
    marginTop: 35 * em,
  },
  commentPhoto: {
    fontSize: 12 * em,
    lineHeight: 14 * em,
    color: '#6A8596',
  },

  nextBtn: {
    alignSelf: 'flex-end',
    marginBottom: 30 * em,
  },
};

export default MabulCommonAddPhotoScreen;
