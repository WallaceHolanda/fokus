import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({ active, onPress, display }) => {

    return (
        <Pressable
            onPress={onPress}
            style={active ? styles.contextButtonActive : null}
        >
            <Text style={styles.contextButtonText}>
                {display}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    contextButtonText: {
        padding: 8,
        color: '#fff',
        fontSize: 12.5,
    },
    contextButtonActive: {
        borderRadius: 8,
        backgroundColor: '#144480',
    },
});