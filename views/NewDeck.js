import React, {useState} from 'react';
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
import {useDispatch} from 'react-redux';
import Button from '../components/Button';
import {handleAddDeck} from '../redux/actions';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {saveDeckTitle} from '../utils/API';

const NewDeck = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleTitleChange = title => {
    setTitle(title);
  };

  const handleSubmit = title => {
    const text = title.trim().split(' ').join('');

    dispatch(handleAddDeck(text));
    saveDeckTitle(text);

    const resetRoute = CommonActions.reset({
      index: 1,
      routes: [
        {name: 'AppHome'},
        {name: 'Deck', params: {title: text, id: text}},
      ],
    });

    navigation.dispatch(resetRoute);

    setTitle('');
  };

  const disabled = title.length === 0;

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
              value={title}
              onChangeText={handleTitleChange}
              autoFocus={true}
            />
          </View>
          <Button
            onPress={() => (title.trim() ? handleSubmit(title) : null)}
            disabled={disabled}
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
