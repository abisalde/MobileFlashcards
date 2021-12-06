import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DeckBox from '../components/DeckBox';
import Button from '../components/Button';
import {lightGreen, black} from '../utils/colors';
import TextButton from '../components/TextButton';
import {useSelector, useDispatch} from 'react-redux';
import {handleRemoveDeck} from '../redux/actions';
import {removeDeck} from '../utils/API';

const Deck = ({navigation, route}) => {
  const dispatch = useDispatch();
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
    dispatch(handleRemoveDeck(id));

    removeDeck(id);

    navigation.navigate('AppHome', {screen: 'DeckList'});
  };

  return (
    <View style={styles.container}>
      <DeckBox style={styles.deckBox} id={id} questions={questions} />
      <View>
        <Button
          textBtn={{color: black}}
          onPress={() =>
            navigation.navigate('AddCard', {title: title, id: title})
          }>
          Add Card
        </Button>
        <Button
          btnStyle={{backgroundColor: black}}
          onPress={() =>
            navigation.navigate('QuizHome', {title: title, id: title})
          }>
          Start Quiz
        </Button>
      </View>
      <TextButton onPress={() => deleteDeck(id)}>Delete Deck</TextButton>
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
