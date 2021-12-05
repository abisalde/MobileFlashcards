import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';

const TestQuiz = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Question</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TestQuiz;
