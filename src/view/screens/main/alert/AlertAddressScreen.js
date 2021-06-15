import React, { useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import SearchBox from 'view/components/other/SearchBox';
import CommentText from 'view/components/text/CommentText';
import SearchCommonListItem from 'view/components/adapter/SearchCommonListItem';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import MabulNextButton from 'view/components/button/MabulNextButton';
import { Actions } from 'react-native-router-flux';
// import { LocationRed } from 'assets/svg/icons';

const AlertAddressScreen = (props) => {
  const conceptColor = '#F9547B';

  const [searchedUsers, getSearchResult] = useState('');
  const [address, setAddress] = useState('');
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem text={item.userName} subText={item.address} icon={item.ic_location} style={styles.listItem} />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'Où ?'} style={styles.title} />
        <SearchBox
          style={styles.searchBox}
          comment="Rechercher un adresse"
          value={address}
          onChangeText={(t) => {
            setAddress(t);
            getSearchResult([
              {
                id: 0,
                userName: 'Le Gosier',
                ic_location: require('assets/images/ic_location.png'),
              },
              {
                id: 1,
                userName: 'Gosier Guadeloupe',
                ic_location: require('assets/images/ic_location.png'),
              },
              {
                id: 2,
                userName: 'Beaumanoir, Le Gosier',
                address: 'Route de Beaumanoir, Le Gosier',
                ic_location: require('assets/images/ic_location.png'),
              },
            ]);
          }}
        />
        {address === '' && <CommentText text={'Utiliser ma position'} color="#F9547B" style={{ marginTop: 27 * em }} />}
        {/*
        <FlatList
          data={searchedUsers}
          renderItem={renderFlatList}
          keyExtractor={(i) => i.id}
          style={{ marginTop: 25 * hm }}
        /> */}
      </View>
      <MabulNextButton
        color={conceptColor}
        style={[styles.btn, { backgroundColor: conceptColor }]}
        text="Suivant"
        onPress={() => Actions.alertAddNote({ process: 60 })}
      />
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'flex-start', backgroundColor: '#ffffff' },
  header: { height: '10.3%' },
  body: { flex: 1, width: '100%', paddingHorizontal: 30 * em, justifyContent: 'flex-start' },
  commonHeader: { marginTop: 27 * hm },
  title: { textAlign: 'left', marginTop: 35 * hm, lineHeight: 38 * em },
  searchBox: { marginTop: 35 * hm, height: 53 * em },
  listItem: { height: 38 * hm, marginTop: 27 * hm },
  btn: {
    position: 'absolute',
    width: 163 * em,
    alignSelf: 'flex-end',
    bottom: 30 * hm,
    right: 30 * em,
    backgroundColor: '#38C2FF',
  },
};

export default AlertAddressScreen;
