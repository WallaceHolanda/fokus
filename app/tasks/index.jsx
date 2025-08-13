import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../../components/FokusButton";
import TaskItem from "../../components/TaskItem";
import useTaskContext from "../../components/context/useTaskContext";
import { IconPlus } from "../../components/icons";

export default function Tasks() {

    const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext();

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.inner}>
                    <FlatList
                        data={tasks}
                        contentContainerStyle={{ gap: 8 }}
                        keyExtractor={(item) => item.id}
                        ListEmptyComponent={() =>
                            <Text style={styles.emptyTitle}>
                                Ainda não há tarefas na sua lista, que tal adicionar?
                            </Text>
                        }
                        ListHeaderComponent={() => <Text style={styles.title}>Lista de tarefas:</Text>}
                        renderItem={({ item }) =>
                            <TaskItem
                                key={item.id}
                                text={item.description}
                                completed={item.completed}
                                onPressDelete={() => {
                                    deleteTask(item.id);
                                }}
                                onToggleComplete={() => {
                                    toggleTaskCompleted(item.id);
                                }}
                                onPressEdit={() => {
                                    router.navigate(`/edit-task/${item.id}`);
                                }}

                            />
                        }
                        ListFooterComponent={
                            <View style={{ marginTop: 16 }}>
                                <FokusButton
                                    title="Adicionar nova tarefa"
                                    icon={<IconPlus />}
                                    outline
                                    onPress={() => { router.navigate('/add-task') }}
                                />
                            </View>
                        }
                    />
                </View>

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
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 18,
        marginTop: 40,
        marginBottom: 24,
        color: '#98A0A8',
        textAlign: 'center',
    },
    inner: {
        gap: 8,
    }
});