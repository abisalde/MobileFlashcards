import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
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
import {clearLocalNotification, setLocalNotification} from '../utils/helpers';

const QuizHome = ({route, navigation}) => {
  const dispatch = useDispatch();
  const decks = useSelector(decks => decks);

  const id = route.params?.id;
  const deck = decks[id];
  const questions = deck?.questions;

  // SET ROUTE HEADER
  const setTitle = id => {
    navigation.setOptions({title: id});
  };

  useEffect(() => {
    setTitle(`${route.params?.id} Quiz`);
  });

  // SET DECK WITHOUT A CARD TO DISPLAY OR QUESTIONS
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

  // SET STATE FOR QUESTION AND ANSWER
  const [questionIndex, setQuestionIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState(false);
  const [showAnswer, setShowAnswer] = useState(true);
  const [nextQuestion, setNextQuestion] = useState(true);

  // SET QUESTION FUNCTION
  const markQuestion = isCorrect => {
    setCorrectAnswers(isCorrect ? correctAnswers + 1 : correctAnswers);
    setDisabledButtons(true);
    setShowAnswer(false);
    setNextQuestion(false);
  };

  // SET NEXT QUESTION FUNCTION
  const nextQuestionHandler = () => {
    setQuestionIndex(
      questionIndex >= questions.length - 1 ? 0 : questionIndex + 1,
    );
    setCount(count + 1);
    setShowAnswer(true);
    setDisabledButtons(false);
    setNextQuestion(true);
  };

  // SET RESET FUNCTION AND ROUTE TO SCORE VIEW
  useEffect(() => {
    const totalQuestion = questions?.length;

    if (setQuestionIndex !== questionIndex) {
      if (count >= totalQuestion) {
        navigation.navigate('Score', {
          id,
          correctAnswers,
          totalQuestion,
        });
        setQuestionIndex(0);
        setCount(0);
        setCorrectAnswers(0);
        clearLocalNotification().then(setLocalNotification);
      }
    }
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.count}>
          {questionIndex + 1} of {questions && questions?.length}{' '}
          {questions?.length > 1 ? 'questions' : 'question'}
        </Text>
      </View>
      <View style={styles.inner}>
        <View style={styles.flipContainer}>
          <View style={[styles.flipCard]}>
            <Text style={[styles.question]}>
              {questions && questions[questionIndex].question}
            </Text>
            <TextButton
              disabled={showAnswer}
              onPress={() =>
                alert('Answer: ' + questions[questionIndex].answer)
              }
              style={{fontSize: 15, marginTop: 50}}>
              Show Answer
            </TextButton>
          </View>
          <View style={[styles.flipCard]}>
            <Text style={[styles.answer]}>
              {questions && questions[questionIndex].answer}
            </Text>
            <TextButton
              disabled={showAnswer}
              onPress={() =>
                alert('Question: ' + questions[questionIndex].question)
              }
              style={{fontSize: 15, marginTop: 50}}>
              Show Question
            </TextButton>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button
            onPress={() => markQuestion(true)}
            disabled={disabledButtons}
            btnStyle={{backgroundColor: green, borderColor: green}}>
            Correct
          </Button>
          <Button
            onPress={() => markQuestion(false)}
            disabled={disabledButtons}
            btnStyle={{backgroundColor: red, borderColor: red}}>
            InCorrect
          </Button>
          <View style={{marginTop: 30}}>
            <TextButton
              onPress={() => nextQuestionHandler()}
              disabled={nextQuestion}
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
});

export default React.memo(QuizHome);
