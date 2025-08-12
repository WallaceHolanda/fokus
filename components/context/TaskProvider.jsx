import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TASKS_STORAGE_KEY = 'fokus-tasks';

export function TasksProvider({ children }) {

    const [tasks, setTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
                const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
                setTasks(loadedData);
                setIsLoaded(true);
            } catch (e) {
                console.error('Error: ', e);
            }
        }
        getData();
    }, []);

    useEffect(() => {
        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
            } catch (e) {
                console.error('Error: ', e);
            }
        }
        if (isLoaded) {
            storeData(tasks);
        }
    }, [tasks]);

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

    const updateTask = (id, description) => {
        console.log('Id: ', id, 'Description: ', description);
        console.log(tasks)
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.id == id) {
                    console.log('Task found');
                    task.description = description;
                }
                return task;
            });
        });

    }

    const toggleTaskCompleted = (id) => {
        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.id == id) {
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
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    );
}