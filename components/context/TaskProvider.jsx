import { createContext } from "react";

export const TaskContext = createContext();

export function TasksProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    const addTask = (description) => {
        setTasks((prevTasks) => {
            return [
                ...prevTasks,
                {
                    description,
                    id: prevTasks.length + 1,
                },
            ]
        })
    }

    const toggleTaskCompletion = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.map(task => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
        });
    }

    const deleteTask = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.filter(task => task.id !== id);
        });
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            deleteTask,
            toggleTaskCompletion,
        }}>
            {children}
        </TaskContext.Provider>
    );
}