import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DeckBox from '../components/DeckBox';
import Button from '../components/Button';
import {lightGreen, white, black} from '../utils/colors';
import TextButton from '../components/TextButton';

const Deck = () => {
  return (
    <View style={styles.container}>
      <DeckBox style={styles.deckBox} />
      <View>
        <Button textBtn={{color: black}} onPress={() => alert('Add Card')}>
          Add Card
        </Button>
        <Button
          btnStyle={{backgroundColor: black}}
          onPress={() => alert('Start Quiz')}>
          Start Quiz
        </Button>
      </View>
      <TextButton onPress={() => alert('Reset Deck')}>Delete Deck</TextButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20,
    alignItems: 'center',
    backgroundColor: lightGreen,
  },
  deckBox: {
    backgroundColor: 'transparent',
  },
});

export default Deck;
