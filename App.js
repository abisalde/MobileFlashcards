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

// redux store
import {Provider} from 'react-redux';
import store from './redux/store';

// Status Bar
import FlashcardStatusBar from './components/FlashcardsStatusBar';
import {purple} from './utils/colors';

// Navigation
import AppNavigation from './navigation';
import {NavigationContainer} from '@react-navigation/native';

// Local Notification
import {setLocalNotification} from './utils/helpers';

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
