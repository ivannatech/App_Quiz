import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnswerButton from './AnswerButton';
import Colors from '../../../constants/Colors';

const Question = ({ pergunta, respostaSelecionada, verificarResposta, disabled }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{pergunta.enunciado}</Text>
      {pergunta.opcoes.map((opcao, indice) => (
        <AnswerButton
          key={indice}
          option={opcao}
          isSelected={respostaSelecionada === indice}
          isCorrect={indice === pergunta.respostaCerta}
          onPress={() => verificarResposta(indice)}
          disabled={disabled}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Question;