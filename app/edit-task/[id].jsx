import { router, useLocalSearchParams } from "expo-router";
import useTaskContext from "../../components/context/useTaskContext";
import { FormTask } from "../../components/FormTask";

export default function EditTask() {
    const editTask = (description) => {
        updateTask(id, description);
        router.navigate('/tasks');
    }

    const { id } = useLocalSearchParams();
    const { tasks, updateTask } = useTaskContext();
    const task = tasks.find(task => task.id == id);

    return (
        <FormTask
            defaultValue={task.description}
            onFormSubmit={editTask}
        />
    );
}