import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
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

const QuizHome = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.count}>1 of 2 questions</Text>
      </View>
      <View style={styles.inner}>
        <View style={styles.flipContainer}>
          <Text style={styles.question}>What is the capital of France?</Text>
          <TextButton onPress={() => alert('Answer')} style={{fontSize: 16}}>
            Answer
          </TextButton>
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

export default QuizHome;
