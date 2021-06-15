import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { hexToRGB, em, hm } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from 'view/components/button/MabulNextButton';
import CommonListItem from 'view/components/adapter/CommonListItem';
import DemandType from 'model/demand/DemandType';

const MabulCommonRequestDetailScreen = ({ mabulSettings, process }) => {
  const conceptColor = mabulSettings.color;
  var iconEdit = mabulSettings.editIcon;
  var iconDocument = mabulSettings.documentIcon;

  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={process} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={mabulSettings.noteTitle} style={styles.title} />
          <CommentText
            text="Soi court et précis dans les détails"
            style={styles.comment}
            titleStyle={styles.listCaption}
          />
          <CommonListItem
            icon={iconEdit}
            style={styles.listItem}
            title="Écrit un titre court"
            titleStyle={styles.listCaption}
            // rightView
          />
          <View style={styles.line} />
          <CommonListItem
            icon={iconDocument}
            style={[styles.listItem, { height: 62 * em }]}
            title="Détail ta demande ici"
            subTitle="(Soit concis pour être plus efficace)"
            titleStyle={styles.listCaption}
            subTitleStyle={styles.listComment}
          />
          <View style={styles.line} />
        </View>
        <MabulNextButton
          color={hexToRGB(conceptColor, 0.5)}
          style={styles.nextBtn}
          onPress={() => {
            mabulSettings.type === DemandType.SELL
              ? Actions.mabulSellPrice({ mabulSettings: mabulSettings, process: 67 })
              : Actions.mabulCommonAddPhoto({
                  mabulSettings: mabulSettings,
                  process:
                    mabulSettings.type === DemandType.NEED ? 53 : mabulSettings.type === DemandType.ORGANIZE ? 40 : 74,
                });
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10.3%',
    marginTop: 16 * hm,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 300 * em,
    textAlign: 'left',
    marginTop: 35 * hm,
    lineHeight: 38 * em,
    fontSize: 28 * em,
    fontWeight: 'bold',
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, textAlignVertical: 'center', marginTop: 10 * hm },
  listItem: {
    height: 43 * em,
    marginTop: 25 * em,
  },
  icon: { width: 19 * em, height: 22 * em, marginRight: 20 * em },
  listCaption: { color: '#6A8596' },
  listComment: { fontSize: 13 * em, lineHeight: 17 * em, color: '#6A8596' },
  nextBtn: {
    alignSelf: 'flex-end',
    marginBottom: 30 * hm,
  },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 39 * em },
};

export default MabulCommonRequestDetailScreen;
