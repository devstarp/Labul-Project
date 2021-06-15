import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar, Platform } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import RootRoutes from './routes';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  }, []);
  StatusBar.setBarStyle('dark-content');
  Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent');
  Platform.OS === 'android' && StatusBar.setTranslucent(true);
  return (
    <RootSiblingParent>
          <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        <RootRoutes />
      </View>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 0,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
});

export default App;
