import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress, title, icon }) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            {icon}
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        gap: 12,
        padding: 8,
        borderRadius: 32,
        backgroundColor: '#B872FF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#021123',
        textAlign: 'center',
    },
});
