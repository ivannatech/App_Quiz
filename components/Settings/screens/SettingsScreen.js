import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TimeInput from '../components/TimeInput';
import Colors from '../../../constants/Colors';

const SettingsScreen = () => {
  const [tempoPartida, setTempoPartida] = useState('');
  const navigation = useNavigation();

  const handleStartQuiz = () => {
    const tempo = parseInt(tempoPartida, 10);
    if (!isNaN(tempo) && tempo > 0) {
      navigation.navigate('Quiz', { tempoLimite: tempo });
    } else {
      alert('Por favor, insira um tempo válido em segundos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações do Quiz</Text>
      <TimeInput value={tempoPartida} onChangeText={setTempoPartida} />
      <Button title="Iniciar Quiz" onPress={handleStartQuiz} />
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
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default SettingsScreen;