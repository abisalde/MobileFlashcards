import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {lightGreen, lightPurple} from '../utils/colors';

const CardFlip = () => {
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

  return (
    <View style={styles.container}>
      <View>
        <Animated.View style={[frontAnimatedStyle, styles.flipCard]}>
          <Text style={[styles.textFlip]}>Front</Text>
        </Animated.View>
        <Animated.View
          style={[backAnimatedStyle, styles.flipCard, styles.flipBack]}>
          <Text style={[styles.textFlip]}>Back</Text>
        </Animated.View>
      </View>
      <TouchableOpacity onPress={() => FlipCard()}>
        <Text>Flip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCard: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightPurple,
    backfaceVisibility: 'hidden',
  },
  flipBack: {
    backgroundColor: lightGreen,
    position: 'absolute',
    top: 0,
  },
  textFlip: {
    fontSize: 30,
    color: 'white',
  },
});
export default CardFlip;
