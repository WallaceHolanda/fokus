import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('./pomodoro.png')} />
      <View style={styles.actions} >

        <View style={styles.context}>
          <Pressable>
            <Text>Foco</Text>
          </Pressable>
          <Pressable>
            <Text>Pausa curta</Text>
          </Pressable>
          <Pressable>
            <Text>Pausa longa</Text>
          </Pressable>
        </View>

        <Text style={styles.timer}>25:00</Text>
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
