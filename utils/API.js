import {decks} from './_DATA';
import {DECKS_STORAGE_KEY} from './helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDecks = async () => {
  try {
    const decksJSON = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    if (decksJSON === null) {
      return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
    return decksJSON === null ? decks : JSON.parse(decksJSON);
  } catch (error) {
    console.log('getDecks error: ', error);
  }
};

export const getDeck = async id => {
  try {
    const decksJSON = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    return JSON.parse(decksJSON)[id];
  } catch (error) {
    console.log('getDeck error: ', error);
  }
};

export const saveDeckTitle = async title => {
  try {
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          title,
          questions: [],
        },
      }),
    );
  } catch (error) {
    console.log('saveDeckTitle error: ', error);
  }
};

export const removeDeck = async key => {
  try {
    const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const deck = JSON.parse(data);
    deck[key] = undefined;
    delete deck[key];
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
  } catch (error) {
    console.log('removeDeck error: ', error);
  }
};

export const addCardToDeck = async (title, card) => {
  try {
    const deck = await getDeck(title);
    await AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [title]: {
          questions: [...deck.questions].concat(card),
        },
      }),
    );
  } catch (error) {
    console.log('addCardToDeck error: ', error);
  }
};

export const clearDecks = async () => {
  try {
    await AsyncStorage.removeItem(DECKS_STORAGE_KEY);
  } catch (error) {
    console.log('clearDecks error: ', error);
  }
};
