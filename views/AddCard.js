import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {black, green, lightGreen, textColor, red} from '../utils/colors';
import Button from '../components/Button';
import {useDispatch} from 'react-redux';
import {handleAddCard} from '../redux/actions';
import {addCardToDeck} from '../utils/API';

const AddCard = ({navigation, route}) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const id = route.params?.title;
    const card = {question, answer};

    if (question.trim() === '' || question.trim().length < 2) {
      return alert(
        'Question cannot be empty & Character length must be greater than 2',
      );
    } else if (answer.trim() === '' || answer.trim().length < 2) {
      return alert(
        'Answer cannot be empty & Character length must be greater than 2',
      );
    }

    dispatch(handleAddCard(id, card));

    setQuestion('');
    setAnswer('');
    addCardToDeck(id, card);
    navigation.goBack();
  };

  const setTitle = id => {
    navigation.setOptions({title: id});
  };

  useEffect(() => {
    setTitle(`Add Card to ${route.params?.title}`);
  });

  const disabled = !question.trim() || !answer.trim();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Text
            style={
              styles.text
            }>{`Add question and answer to ${route.params?.title} deck card`}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Question"
              name="question"
              autoFocus={true}
              returnKeyType="next"
              onChangeText={question => setQuestion(question)}
              value={question}
            />
            <TextInput
              style={styles.input}
              placeholder="Answer"
              name="answer"
              returnKeyType="done"
              onChangeText={answer => setAnswer(answer)}
              value={answer}
              onSubmitEditing={handleSubmit}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              onPress={handleSubmit}
              text="Submit"
              disabled={disabled}
              btnStyle={{backgroundColor: green, borderColor: green}}>
              Submit
            </Button>
          </View>
          <View style={{height: '30%'}} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightGreen,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 24,
  },
  text: {
    fontSize: 22,
    color: textColor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35,
  },
  error: {
    color: red,
    fontSize: 12,
  },
  inputContainer: {
    marginTop: -30,
  },
  input: {
    borderColor: black,
    borderWidth: 1,
    height: 50,
    padding: 10,
    marginTop: 15,
    fontSize: 18,
    borderRadius: Platform.OS === 'ios' ? 9 : 4,
  },
});

export default AddCard;
