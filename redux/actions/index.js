import {getDecks, removeDeck} from '../../utils/API';
import {GET_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK} from './types';

export const handleGetDecks = decks => {
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

export const handleAddCard = (deckId, card) => {
  return {
    type: ADD_CARD,
    deckId,
    card,
  };
};

const deleteDeck = id => {
  return {
    type: REMOVE_DECK,
    id,
  };
};

export const handleRemoveDeck = id => {
  return dispatch => {
    return removeDeck(id)
      .then(() => dispatch(deleteDeck(id)))
      .catch(err => console.log(err));
  };
};

export const loadAllDecks = () => {
  return dispatch => {
    getDecks().then(decks => {
      dispatch(handleGetDecks(decks));
    });
  };
};
