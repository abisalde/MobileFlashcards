import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck,
  clearDecks,
} from '../utils/API';

const Test = () => {
  const [decks, setDecks] = useState({});

  const [deck, setDeck] = useState({});

  useEffect(() => {
    handleAllDecks();
  });

  const handleAllDecks = () => {
    getDecks().then(decks => {
      setDecks(decks);
    });
  };

  const handleSingleDeck = deck => {
    getDeck('React').then(deck => {
      setDeck(deck);
    });
  };

  const handleSaveDeck = () => {
    saveDeckTitle('Testing');
  };

  const handleSaveDeckCard = () => {
    addCardToDeck('Testing', {
      question: 'How are you?',
      answer: 'I am good',
    });
  };

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Test;
