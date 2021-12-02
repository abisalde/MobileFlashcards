import {GET_DECKS, ADD_DECK, ADD_CARD, REMOVE_DECK} from '../actions/types';

const decks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      const {title} = action;
      return {
        ...state,
        [title]: {
          title,
          questions: [],
        },
      };
    case ADD_CARD:
      const {id, card} = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          questions: [...state[id].questions].concat(card),
        },
      };
    case REMOVE_DECK:
      const {id} = action;
      const {[id]: value, ...newState} = state;
      return newState;
    default:
      return state;
  }
};

export default decks;
