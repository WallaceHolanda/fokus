import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import useTaskContext from "../../components/context/useTaskContext";
import { IconSave } from "../../components/icons";

export default function EditTask() {
    const { id } = useLocalSearchParams();
    const { tasks, updateTask } = useTaskContext();
    const [description, setDescription] = useState('');

    useEffect(() => {
        console.log('ID param: ', id);
        const task = tasks.find(task => task.id == id);
        console.log('Found task: ', task);

        if (task) {
            setDescription(task.description);
        }
    }, [id, tasks]);

    const editTask = () => {
        if (!description) {
            return;
        }
        updateTask(id, description);
        router.navigate('/tasks');
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                <View style={styles.inner}>
                    <Text style={styles.title}>
                        Editar uma tarefa:
                    </Text>
                    <Text style={styles.formTitle}>
                        Em que você está trabalhando?
                    </Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        style={styles.formInput}
                        value={description}
                        onChangeText={setDescription}
                    />
                    <Pressable
                        style={styles.saveButton}
                        onPress={() => editTask()}
                    >
                        <IconSave />
                        <Text style={styles.buttonText}>
                            Salvar
                        </Text>

                    </Pressable>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        backgroundColor: '#021123',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        color: '#FFF',
        textAlign: 'center',
    },
    inner: {
        gap: 32,
        padding: 16,
        width: '90%',
        borderRadius: 8,
        backgroundColor: '#98A0A8',
    },
    formTitle: {
        color: '#000',
        fontSize: 18,
        textAlign: 'left',
        fontWeight: '600',
    },
    formInput: {
        padding: 16,
        height: 100,
        borderRadius: 8,
        backgroundColor: '#FFF',
    },
    saveButton: {
        gap: 4,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    buttonText: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
});