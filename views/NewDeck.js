import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {black, gray, lightGreen, textColor} from '../utils/colors';
import Button from '../components/Button';

const NewDeck = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          placeholder="Deck Title"
          placeholderTextColor={gray}
        />
      </View>
      <Button
        onPress={() => alert('Submit')}
        btnStyle={{backgroundColor: black, borderColor: black}}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 30,
    backgroundColor: lightGreen,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: textColor,
    marginBottom: 10,
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
