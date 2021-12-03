import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {loadAllDecks} from '../redux/actions';
import DeckBox from '../components/DeckBox';

const DeckList = ({navigation}) => {
  useEffect(() => {
    dispatch(loadAllDecks());
  }, [dispatch]);

  const dispatch = useDispatch();
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
  },
});

export default DeckList;
