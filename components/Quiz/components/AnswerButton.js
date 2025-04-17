import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const AnswerButton = ({ option, isSelected, isCorrect, onPress, disabled }) => {
  const buttonStyle = [
    styles.button,
    isSelected && (isCorrect ? styles.correct : styles.incorrect),
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{option}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderColor: Colors.border,
    borderWidth: 1,
    width: 250,
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
  },
  correct: {
    backgroundColor: Colors.correct,
    borderColor: Colors.correct,
  },
  incorrect: {
    backgroundColor: Colors.incorrect,
    borderColor: Colors.incorrect,
  },
});

export default AnswerButton;