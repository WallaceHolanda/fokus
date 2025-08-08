import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/fokus_button";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
      />
      <View style={styles.inner}>
        <Image
          source={require('../assets/images/initial.png')}
        />
        <Text style={styles.text}>
          Otimize sua{'\n'}produtividade, {'\n'}
          <Text style={styles.boldText}>
            mergulhe no que{'\n'}importa
          </Text>
        </Text>
        <FokusButton
          title='Quero Iniciar!'
          onPress={() => router.navigate('/pomodoro')}
        />
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
    flex: 1,
    gap: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#021123',
  },
  inner: {
    gap: 16,
  },
  text: {
    fontSize: 26,
    color: '#FFF',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
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
