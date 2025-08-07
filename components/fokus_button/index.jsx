import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {title}
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
