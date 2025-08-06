import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from '../components/action_button';
import { FokusButton } from '../components/fokus_button';
import { Timer } from '../components/timer';

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
            <ActionButton
              display={item.display}
              active={item.id === timerType.id}
              onPress={() => setTimerType(item)}
            >
            </ActionButton>
          ))}
        </View>
        <Timer totalSeconds={timerType.initialValue}></Timer>
        <FokusButton />
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
  actions: {
    gap: 32,
    padding: 24,
    width: '80%',
    borderWidth: 2,
    borderRadius: 32,
    borderColor: '#144480',
    backgroundColor: '#14448080',
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
