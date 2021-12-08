import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';
import {
  green,
  lightGreen,
  lightPurple,
  muted,
  red,
  textColor,
} from '../utils/colors';

const Score = ({route, navigation}) => {
  const {id, correctAnswers, totalQuestion} = route.params;

  const setTitle = id => {
    navigation.setOptions({title: id});
  };

  useEffect(() => {
    setTitle(`${route.params?.id} Quiz Score`);
  });

  const score = Math.round((correctAnswers / totalQuestion) * 100);
  const result = score >= 65 ? styles.pass : styles.fair;
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.headerText}>{id} Quiz Completed!</Text>
        <Text style={styles.scoreText}>
          You answered {correctAnswers} correctly out of {totalQuestion}{' '}
          {totalQuestion > 1 ? 'questions' : 'question'}
        </Text>
      </View>
      <View>
        <Text style={result}>{score}%</Text>
      </View>
      <View>
        <Button
          btnStyle={{backgroundColor: green, borderColor: green}}
          onPress={() => navigation.navigate('QuizHome', {id, title: id})}>
          Restart Quiz
        </Button>
        <Button
          btnStyle={{backgroundColor: lightPurple, borderColor: lightPurple}}
          onPress={() => navigation.navigate('Deck', {id, title: id})}>
          Back to Deck
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: lightGreen,
  },
  headerText: {
    fontSize: 26,
    color: textColor,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
  scoreText: {
    fontSize: 18,
    color: muted,
    marginTop: 10,
  },
  pass: {
    fontSize: 35,
    color: green,
    fontWeight: 'bold',
  },
  fair: {
    fontSize: 35,
    color: red,
    fontWeight: 'bold',
  },
});

Score.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      correctAnswers: PropTypes.number.isRequired,
      totalQuestion: PropTypes.number.isRequired,
    }),
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default Score;
