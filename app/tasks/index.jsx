import { StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../../components/FokusButton";
import TaskItem from "../../components/TaskItem";
import { IconPlus } from "../../components/icons";

export default function Tasks() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Lista de tarefas:
                </Text>
                <View style={styles.inner}>
                    <TaskItem
                        completed
                        text="Sample Task"
                    />
                    <TaskItem
                        text="Sample Task"
                    />
                </View>
                <FokusButton
                    title="Adicionar nova tarefa"
                    icon={<IconPlus />}
                    outline
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#021123',
    },
    wrapper: {
        gap: 40,
        width: '90%',
    },
    title: {
        fontSize: 26,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    inner: {
        gap: 8,
    }
});