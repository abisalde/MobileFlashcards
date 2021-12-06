/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './redux/store';
import FlashcardStatusBar from './components/FlashcardsStatusBar';
import {purple} from './utils/colors';
import AppNavigation from './navigation';
import {setLocalNotification} from './utils/helpers';
import CardFlip from './components/CardFlip';

const App = () => {
  useEffect(() => {
    setLocalNotification();
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <FlashcardStatusBar
            backgroundColor={purple}
            barStyle="light-content"
          />
          <AppNavigation />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
