import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from '../components/action_button';
import { FokusButton } from '../components/fokus_button';
import { IconPause, IconPlay } from '../components/icons';
import { Timer } from '../components/timer';

const pomodoro = [
    {
        id: 'focus',
        initialValue: 25 * 60,
        display: 'Foco',
        image: require('../assets/images/pomodoro.png'),
    },
    {
        id: 'short',
        initialValue: 5 * 60,
        display: 'Pausa curta',
        image: require('../assets/images/short.png'),
    },
    {
        id: 'long',
        initialValue: 15 * 60,
        display: 'Pausa longa',
        image: require('../assets/images/long.png'),
    }
]


export default function Pomodoro() {

    const [timerType, setTimerType] = useState(pomodoro[2]);
    const [timerRunning, setTimerRunning] = useState(false);
    const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
    const timerRef = useRef(null);

    const clearTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            setTimerRunning(false);
        }
    }

    const toggleTimerType = (newTimerType) => {
        setTimerType(newTimerType);
        setSeconds(newTimerType.initialValue);
        clearTimer();
    }

    const toggleTimer = () => {
        if (timerRef.current) {
            clearTimer();
            return;
        }

        setTimerRunning(true);

        const id = setInterval(() => {
            setSeconds((oldState) => {
                if (oldState === 0) {
                    clearTimer();
                    return timerType.initialValue;
                }
                return oldState - 1;
            });
        }, 1000);

        timerRef.current = id;
    }

    return (
        <View style={styles.container}>
            <Image source={timerType.image} />
            <View style={styles.actions} >
                <View style={styles.context}>
                    {pomodoro.map((item) => (
                        <ActionButton
                            key={item.id}
                            display={item.display}
                            active={item.id === timerType.id}
                            onPress={() => toggleTimerType(item)}
                        >
                        </ActionButton>
                    ))}
                </View>
                <Timer totalSeconds={seconds}></Timer>
                <FokusButton
                    title={timerRunning ? 'Pausar' : 'Começar'}
                    icon={timerRunning ? <IconPause /> : <IconPlay />}
                    onPress={toggleTimer}>

                </FokusButton>
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
