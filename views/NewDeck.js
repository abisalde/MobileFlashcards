import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {black, gray, lightGreen, textColor} from '../utils/colors';
import Button from '../components/Button';
import {handleAddDeck} from '../redux/actions';

const NewDeck = () => {
  const handleSubmit = title => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>
              What is the title of your new deck?
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Deck Title"
              placeholderTextColor={gray}
            />
          </View>
          <Button
            onPress={() => alert('Here is your new deck!')}
            btnStyle={{
              backgroundColor: black,
              borderColor: black,
              marginBottom: 40,
              marginTop: 0,
            }}>
            Submit
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 25,
    backgroundColor: lightGreen,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: textColor,
    marginBottom: 20,
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

export default NewDeck;
