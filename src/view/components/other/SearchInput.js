import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { em, hm } from 'view/common/const';
import { Magnifier, CrossCircle } from 'assets/svg/icons';
import SmallText from 'view/components/text/SmallText';
const SearchInput = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  const [value, setValue] = useState('');

  const _delete = () => {
    setValue('');
    props.onChangeText && props.onChangeText('');
  };
  const _handleText = (text) => {
    props.onChangeText && props.onChangeText(text);
    setValue(text);
  };
  return (
    <View
      style={[
        styles.containerFocusOff,
        { borderBottomWidth: onFocus ? 2 * em : 1 * em, borderBottomColor: onFocus ? '#41D0E2' : '#BFCDDB' },
        props.style,
      ]}>
      <View style={styles.imgBtnSearch}>
        <Magnifier width={20 * em} height={20 * em} />
      </View>
      <TextInput
        onSubmitEditing={Keyboard.dismiss}
        value={value}
        onChangeText={_handleText}
        onFocus={() => {
          setOnFocus(true);
          // props.onFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
          // props.onFocus(true);
        }}
        placeholder={onFocus ? '' : props.comment || 'Rechercher un contact'}
        placeholderTextColor="#A0AEB8"
        selectionColor="#40CDDE"
        style={styles.textInput}
      />
      {onFocus && (
        <TouchableOpacity onPress={() => _delete()} style={{ marginTop: 2 * em }}>
          <CrossCircle width={17 * em} height={17 * em} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
const styles = {
  containerFocusOff: { alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'flex-start' },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 16 * em,
    fontFamily: 'Lato-Regular',
    color: '#A0AEB8',
    paddingHorizontal: 0,
  },
  imgBtnSearch: { marginRight: 15 * em },
};
