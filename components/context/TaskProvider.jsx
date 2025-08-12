import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TasksProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    const addTask = (description) => {
        console.log('Adding task:', description);
        setTasks(prevTasks => {
            return [
                ...prevTasks,
                {
                    description,
                    id: prevTasks.length + 1,
                },
            ]
        })
    }

    const toggleTaskCompleted = (id) => {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed;
                }
                return task;
            });
        });
    }

    const deleteTask = (id) => {
        setTasks(prevTasks => {
            return prevTasks.filter(t => t.id != id);
        });
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            deleteTask,
            toggleTaskCompleted,
        }}>
            {children}
        </TaskContext.Provider>
    );
}