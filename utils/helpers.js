import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

// Decks Storage Keys for AsyncStorage
export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';

// Notifications Keys for AsyncStorage
const NOTIFICATION_KEY = 'MobileFlashcards:notifications';

const createNotification = () => {
  return {
    title: 'Study Time!',
    body: "👋 Don't forget to study today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
};

export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync,
  );
};

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Notifications.requestPermissionsAsync().then(({status}) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync().catch(err =>
              console.log(err),
            );

            Notifications.scheduleNotificationAsync({
              content: createNotification(),
              trigger: {
                hour: 20,
                minute: 0,
                repeats: true,
              },
            }).catch(console.error);

            Notifications.setNotificationHandler({
              handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: false,
                shouldSetBadge: false,
              }),
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
};
