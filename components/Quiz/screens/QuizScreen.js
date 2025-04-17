import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { perguntas } from "../../../constants/QuestionsData";
import Question from "../components/Question";
import Colors from "../../../constants/Colors";

const QuizScreen = ({ route }) => {
  const { tempoLimite } = route.params || { tempoLimite: 30 }; // Tempo padrão de 30 segundos
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [tempoRestante, setTempoRestante] = useState(tempoLimite);
  const [cronometroAtivo, setCronometroAtivo] = useState(true);
  const [respostaCorreta, setRespostaCorreta] = useState(null);
  const navigation = useNavigation();

  const pergunta = perguntas[perguntaAtual];

  useEffect(() => {
    let intervalId;

    if (cronometroAtivo && tempoRestante > 0) {
      intervalId = setInterval(() => {
        setTempoRestante((prevTempo) => prevTempo - 1);
      }, 1000);
    } else if (tempoRestante === 0 && cronometroAtivo) {
      setCronometroAtivo(false);
      navigation.navigate("Result", {
        pontuacao,
        totalPerguntas: perguntas.length,
      });
    }

    return () => clearInterval(intervalId);
  }, [cronometroAtivo, tempoRestante, navigation]);

  const verificarResposta = (indice) => {
    if (respostaSelecionada === null) {
      setRespostaSelecionada(indice);
      setRespostaCorreta(pergunta.respostaCerta);
      if (indice === pergunta.respostaCerta) {
        setPontuacao((prevPontuacao) => prevPontuacao + 1);
      }
      setTimeout(() => {
        setRespostaSelecionada(null);
        setRespostaCorreta(null);
        if (perguntaAtual + 1 < perguntas.length && cronometroAtivo) {
          setPerguntaAtual((prevPergunta) => prevPergunta + 1);
        } else if (cronometroAtivo) {
          setCronometroAtivo(false);
          navigation.navigate("Result", {
            pontuacao,
            totalPerguntas: perguntas.length,
          });
        }
      }, 1500); // Tempo para mostrar feedback
    }
  };

  const formatarTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        Tempo Restante: {formatarTempo(tempoRestante)}
      </Text>
      <Text style={styles.questionNumber}>
        Pergunta {perguntaAtual + 1}/{perguntas.length}
      </Text>
      {pergunta && (
        <Question
          pergunta={pergunta}
          respostaSelecionada={respostaSelecionada}
          verificarResposta={verificarResposta}
          disabled={respostaSelecionada !== null || !cronometroAtivo}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  timer: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  questionNumber: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default QuizScreen;
