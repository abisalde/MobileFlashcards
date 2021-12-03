import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import DeckBox from '../components/DeckBox';
import Button from '../components/Button';
import {lightGreen, black} from '../utils/colors';
import TextButton from '../components/TextButton';
import {useSelector} from 'react-redux';
import {handleRemoveDeck} from '../redux/actions';
import {removeDeck} from '../utils/API';
const Deck = ({navigation, route}) => {
  const decks = useSelector(decks => decks);

  const title = route.params?.title;
  const deck = decks[title];
  const id = title;
  const questions = deck?.questions;

  const setTitle = title => {
    navigation.setOptions({title: title});
  };

  useEffect(() => {
    setTitle(title);
  });

  const deleteDeck = id => {
    handleRemoveDeck(id);
    removeDeck(id);
    navigation.navigate('AppHome', {screen: 'DeckList'});
  };

  return (
    <View style={styles.container}>
      <DeckBox style={styles.deckBox} id={id} questions={questions} />
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
      <TextButton onPress={id => deleteDeck(id)}>Delete Deck</TextButton>
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

export default React.memo(Deck);
