import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, SafeAreaView} from 'react-native';
import {loadAllDecks} from '../redux/actions';
import DeckBox from '../components/DeckBox';
import {lightGreen} from '../utils/colors';

const DeckList = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllDecks());
  }, [dispatch]);

  const decks = useSelector(decks => decks);

  return (
    <SafeAreaView style={styles.container}>
      {Object.keys(decks).map(deck => {
        const questions = decks[deck].questions;
        return (
          <DeckBox
            key={deck}
            id={deck}
            questions={questions}
            onPress={() => navigation.navigate('Deck', {title: deck})}
          />
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGreen,
  },
});

export default DeckList;
