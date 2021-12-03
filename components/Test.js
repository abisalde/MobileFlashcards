import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck,
  clearDecks,
} from '../utils/API';
import {FontAwesome} from '@expo/vector-icons';

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
      <Text>
        {Object.keys(decks).map(deck => {
          return (
            <TouchableOpacity
              key={deck}
              onPress={() => navigation.navigate('Deck', {deck: deck})}>
              <Text style={styles.deckTitle}>{deck}</Text>
              <Text style={styles.cardCount}>
                {decks[deck].questions.length} cards
              </Text>
            </TouchableOpacity>
          );
        })}
        {{
          headerLeft: props => (
            <Button
              {...props}
              color="transparent"
              icon={<FontAwesome name="arrow-right" size={15} color="white" />}
              title="Back"
              onPress={() => {
                navigation.navigate('AppHome', {screen: 'DeckList'});
              }}
            />
          ),
        }}
      </Text>
    </View>
  );
};

export default Test;
