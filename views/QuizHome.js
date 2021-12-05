import React, {useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  gray,
  green,
  lightGreen,
  lightPurple,
  red,
  textColor,
} from '../utils/colors';
import TextButton from '../components/TextButton';
import Button from '../components/Button';

const QuizHome = ({route}) => {
  const dispatch = useDispatch();
  const decks = useSelector(decks => decks);

  const id = route.params?.id;
  const deck = decks[id];
  const questions = deck?.questions;

  // Animated Flip starts here
  const animatedValue = new Animated.Value(0);
  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });
  let val = 0;

  animatedValue.addListener(({value}) => {
    val = value;
  });

  const frontAnimatedStyle = {
    transform: [{rotateY: frontInterpolate}],
  };

  const backAnimatedStyle = {
    transform: [{rotateY: backInterpolate}],
  };

  const FlipCard = () => {
    if (val >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  };
  // Animated Flip ends here

  if (questions?.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.question}>
          Sorry, you cannot take a quiz because there are no cards in deck
        </Text>
      </View>
    );
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [showAnswer, setShowAnswer] = useState(true);
  const [nextQuestion, setNextQuestion] = useState(true);

  const onPressHandler = () => {};

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.count}>1 of 2 questions</Text>
      </View>
      <View style={styles.inner}>
        <View style={styles.flipContainer}>
          <Animated.View style={[frontAnimatedStyle, styles.flipCard]}>
            <Text style={[styles.question]}>Question</Text>
            <TextButton onPress={() => FlipCard()} style={{fontSize: 12}}>
              Show Answer
            </TextButton>
          </Animated.View>
          <Animated.View
            style={[backAnimatedStyle, styles.flipCard, styles.flipBack]}>
            <Text style={[styles.answer]}>Answer</Text>
            <TextButton onPress={() => FlipCard()} style={{fontSize: 12}}>
              Show Question
            </TextButton>
          </Animated.View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => alert('Correct')}
            btnStyle={{backgroundColor: green, borderColor: green}}>
            Correct
          </Button>
          <Button
            onPress={() => alert('InCorrect')}
            btnStyle={{backgroundColor: red, borderColor: red}}>
            InCorrect
          </Button>
          <View style={{marginTop: 30}}>
            <Text>{JSON.stringify(questions)}</Text>
            <TextButton
              onPress={() => alert('Next')}
              style={{
                textAlign: 'right',
                paddingRight: 50,
                color: lightPurple,
                fontSize: 17,
              }}>
              Next
            </TextButton>
          </View>
        </View>
        <View style={{height: '5%'}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGreen,
    padding: 20,
  },
  question: {
    fontSize: 25,
    fontWeight: 'bold',
    color: textColor,
  },
  answer: {
    fontSize: 25,
    fontWeight: 'bold',
    color: textColor,
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  flipContainer: {
    alignItems: 'center',
  },
  count: {
    fontSize: 20,
    color: gray,
  },
  flipCard: {
    backfaceVisibility: 'hidden',
  },
  flipBack: {
    position: 'absolute',
    top: 0,
  },
});

export default React.memo(QuizHome);
