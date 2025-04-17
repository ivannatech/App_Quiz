import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const TimeInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Tempo em segundos"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: Colors.border,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default TimeInput;