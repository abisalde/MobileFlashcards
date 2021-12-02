import {getDecks} from '../../utils/API';
import {GET_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK} from './types';

export const handleGetDecks = () => {
  return {
    type: GET_DECKS,
    decks,
  };
};

export const handleAddDeck = title => {
  return {
    type: ADD_DECK,
    title,
  };
};

export const handleAddCard = (id, card) => {
  return {
    type: ADD_CARD,
    id,
    card,
  };
};

export const handleRemoveDeck = id => {
  return {
    type: REMOVE_DECK,
    id,
  };
};

export const loadAllDecks = () => {
  return dispatch => {
    getDecks().then(decks => {
      dispatch(handleGetDecks(decks));
    });
  };
};
