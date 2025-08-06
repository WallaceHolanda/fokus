import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = () => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
                Começar
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
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
});
