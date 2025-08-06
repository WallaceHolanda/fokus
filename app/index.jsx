import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    display: 'Foco',
    image: require('./pomodoro.png'),
  },
  {
    id: 'short',
    initialValue: 5,
    display: 'Pausa curta',
    image: require('./short.png'),
  },
  {
    id: 'long',
    initialValue: 15,
    display: 'Pausa longa',
    image: require('./long.png'),
  }
]


export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[2]);

  return (
    <View style={styles.container}>
      <Image source={timerType.image} />
      <View style={styles.actions} >
        <View style={styles.context}>
          {pomodoro.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => setTimerType(item)}
              style={item.id === timerType.id ? styles.contextButtonActive : null}
            >
              <Text style={styles.contextButtonText}>
                {item.display}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleString('pt-BR', { minute: '2-digit', second: '2-digit' })}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto sem fins lucrativos.</Text>
        <Text style={styles.footerText}>Desenvolvido na Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#021123',
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contextButtonText: {
    padding: 8,
    color: '#fff',
    fontSize: 12.5,
  },
  contextButtonActive: {
    borderRadius: 8,
    backgroundColor: '#144480',
  },
  actions: {
    gap: 32,
    padding: 24,
    width: '80%',
    borderWidth: 2,
    borderRadius: 32,
    borderColor: '#144480',
    backgroundColor: '#14448080',
  },
  timer: {
    fontSize: 54,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    padding: 8,
    borderRadius: 32,
    backgroundColor: '#B872FF',
  },
  buttonText: {
    fontSize: 18,
    color: '#021123',
    textAlign: 'center',
  },
  footer: {
    width: '80%',
  },
  footerText: {
    color: '#98A0A8',
    textAlign: 'center',
    fontSize: 12.5,
  },
});
