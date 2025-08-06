import { StyleSheet, Text } from "react-native";

export const Timer = ({ totalSeconds }) => {

    const timerDate = new Date(totalSeconds * 1000);
    const dateOptions = {
        minute: '2-digit',
        second: '2-digit',
    };

    return (
        <Text style={styles.timer}>
            {timerDate.toLocaleString('pt-BR', dateOptions)}
        </Text>
    );

}

const styles = StyleSheet.create({
    timer: {
        fontSize: 54,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});