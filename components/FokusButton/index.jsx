import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({
    onPress,
    title,
    icon,
    outline,
}) => {
    return (
        <Pressable
            style={[styles.button, outline && styles.outlineButton]}
            onPress={onPress}
        >
            {icon}
            <Text style={[styles.buttonText, outline && styles.outlineButtonText]}>
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
    outlineButton: {
        backgroundColor: 'transparent',
        borderColor: '#B872FF',
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 18,
        color: '#021123',
        textAlign: 'center',
    },
    outlineButtonText: {
        color: '#B872FF',
    },
});
