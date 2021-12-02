import React from 'react';
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
import {black, green, lightGreen, textColor} from '../utils/colors';
import Button from './Button';

const AddCard = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Add Question and Answer to card</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Question"
              autoFocus={true}
              returnKeyType="next"
            />
            <TextInput
              style={styles.input}
              placeholder="Answer"
              returnKeyType="done"
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <Button
              onPress={() => alert('Submit')}
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
