import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { perguntas } from './components/Perguntas';

export default () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0); // Indice Perg. atual
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [tempoPartida, setTempoPartida] = useState('');
  const [tempoRestante, setTempoRestante] = useState(null);
  const [partidaIniciada, setPartidaIniciada] = useState(false);
  const [cronometroAtivo, setCronometroAtivo] = useState(false);

  useEffect(() => {
    let intervalId;

    if (cronometroAtivo && tempoRestante > 0) {
      intervalId = setInterval(() => {
        setTempoRestante((prevTempo) => prevTempo - 1);
      }, 1000);
    } else if (tempoRestante === 0 && partidaIniciada) {
      setMostrarResultado(true);
      setCronometroAtivo(false);
    }

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado ou as dependências mudam
  }, [cronometroAtivo, tempoRestante, partidaIniciada]);

  const verificarResposta = (indice) => {
    if (!cronometroAtivo) {
      return; // Impede que o usuário responda se o cronômetro não estiver ativo
    }
    setRespostaSelecionada(indice);
    if (indice === perguntas[perguntaAtual].respostaCerta) {
      setPontuacao(pontuacao + 1);
    }
    setTimeout(() => {
      if (perguntaAtual + 1 < perguntas.length && cronometroAtivo) {
        setPerguntaAtual(perguntaAtual + 1);
        setRespostaSelecionada(null);
      } else if (!cronometroAtivo) {
        // Não faz nada, o resultado já será mostrado pelo cronômetro
      } else {
        setMostrarResultado(true);
        setCronometroAtivo(false);
      }
    }, 1000);
  };

  const reiniciarQuiz = () => {
    setPerguntaAtual(0);
    setPontuacao(0);
    setMostrarResultado(false);
    setRespostaSelecionada(null);
    setTempoRestante(null);
    setPartidaIniciada(false);
    setCronometroAtivo(false);
    setTempoPartida('');
  };

  const iniciarPartida = () => {
    const tempoEmSegundos = parseInt(tempoPartida, 10);
    if (!isNaN(tempoEmSegundos) && tempoEmSegundos > 0) {
      setTempoRestante(tempoEmSegundos);
      setPartidaIniciada(true);
      setCronometroAtivo(true);
      setPerguntaAtual(0);
      setPontuacao(0);
      setMostrarResultado(false);
      setRespostaSelecionada(null);
    } else {
      alert('Por favor, insira um tempo válido em segundos.');
    }
  };

  const formatarTempo = (tempo) => {
    if (tempo === null) {
      return 'Defina o tempo';
    }
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      {!partidaIniciada ? (
        <View style={styles.configuracao}>
          <Text style={styles.titulo}>Definir Tempo da Partida</Text>
          <TextInput
            style={styles.inputTempo}
            keyboardType="numeric"
            placeholder="Tempo em segundos"
            value={tempoPartida}
            onChangeText={setTempoPartida}
          />
          <Button title="Iniciar Partida" onPress={iniciarPartida} />
        </View>
      ) : mostrarResultado ? (
        <View style={styles.resultado}>
          <Text style={styles.titulo}>Fim do Quiz</Text>
          <Text style={styles.texto}>
            Você acertou {pontuacao} de {perguntas.length} perguntas
          </Text>
          <Button title="Reiniciar Quiz" onPress={reiniciarQuiz} />
        </View>
      ) : (
        <View style={styles.quizContainer}>
          <Text style={styles.tempo}>Tempo Restante: {formatarTempo(tempoRestante)}</Text>
          <Text style={styles.titulo}>
            Pergunta {perguntaAtual + 1}/{perguntas.length}
          </Text>
          <Text style={styles.texto}>{perguntas[perguntaAtual].enunciado} </Text>
          {perguntas[perguntaAtual].opcoes.map((opcao, indice) => (
            <TouchableOpacity
              key={indice}
              style={[
                styles.botao,
                respostaSelecionada === indice
                  ? indice === perguntas[perguntaAtual].respostaCerta
                    ? styles.botaoCorreto
                    : styles.botaoIncorreto
                  : null,
              ]}
              onPress={() => verificarResposta(indice)}
              disabled={respostaSelecionada !== null || !cronometroAtivo}
            >
              <Text style={styles.textoBotao}>{opcao}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#ccc',
    alignItems: 'center',
  },
  configuracao: {
    alignItems: 'center',
  },
  inputTempo: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  quizContainer: {
    alignItems: 'center',
  },
  tempo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultado: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  texto: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    alignSelf: 'center',
    borderColor: '#AAA',
    borderWidth: 1,
    width: 250,
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 17,
  },
  botaoCorreto: {
    backgroundColor: '#C8E6C9',
    borderColor: '#388e3c',
  },
  botaoIncorreto: {
    backgroundColor: '#ffcdd2',
    borderColor: '#d32f2f',
  },
});