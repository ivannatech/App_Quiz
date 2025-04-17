import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constants/Colors';

const ResultScreen = ({ route }) => {
  const { pontuacao, totalPerguntas } = route.params;
  const navigation = useNavigation();

  const handleRestartQuiz = () => {
    navigation.navigate('Settings'); // Volta para a tela de configurações para um novo jogo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fim do Quiz!</Text>
      <Text style={styles.score}>
        Você acertou {pontuacao} de {totalPerguntas} perguntas.
      </Text>
      <Button title="Jogar Novamente" onPress={handleRestartQuiz} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  score: {
    fontSize: 18,
    marginBottom: 30,
  },
});

export default ResultScreen;