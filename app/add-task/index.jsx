import { router } from "expo-router";
import useTaskContext from "../../components/context/useTaskContext";
import { FormTask } from "../../components/FormTask";
export default function AddTask() {
    const { addTask } = useTaskContext();

    const submitTask = (description) => {
        addTask(description);
        router.navigate('/tasks');
    }

    return (
        <FormTask
            onFormSubmit={submitTask}
        />
    );
}